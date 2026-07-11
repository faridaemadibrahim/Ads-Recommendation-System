import behaviorRepository from "../repositories/behavior.repository.js";
import interestRepository from "../repositories/interest.repository.js";
import adRepository from "../repositories/ad.repository.js";

const ACTION_SCORE = {
  VIEW: 1,
  CLICK: 3,
  LIKE: 4,
  COMMENT: 2,
  WATCH: 5,
};

class RecommendationService {
  async getRecommendations(userId: number) {
    // Get user interests and behaviors
    const interests = await interestRepository.findByUser(userId);
    const behaviors = await behaviorRepository.findByUser(userId);

    // categoryId -> score
    const scores = new Map<number, number>();

    // Add score for user interests
    for (const interest of interests) {
      scores.set(interest.categoryId, 10);
    }

    // Add score based on user behaviors
    for (const behavior of behaviors) {
      const categoryId = behavior.ad.categoryId;

      const currentScore = scores.get(categoryId) ?? 0;

      const actionScore = ACTION_SCORE[behavior.action];

      scores.set(categoryId, currentScore + actionScore);
    }

    // Sort categories by score (highest first)
    const sortedCategories = [...scores.entries()].sort((a, b) => b[1] - a[1]);

    // Extract category ids
    const categoryIds = sortedCategories.map(([categoryId]) => categoryId);

    // Get ads for these categories
    const ads = await adRepository.findByCategories(categoryIds);

    // Preserve category ranking
    const categoryOrder = new Map(categoryIds.map((id, index) => [id, index]));

    ads.sort(
      (a, b) =>
        (categoryOrder.get(a.categoryId) ?? Infinity) -
        (categoryOrder.get(b.categoryId) ?? Infinity),
    );

    return ads;
  }
}

export default new RecommendationService();
