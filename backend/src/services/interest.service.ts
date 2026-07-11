import interestRepository from "../repositories/interest.repository";
import categoryRepository from "../repositories/category.repository";

type InterestData = {
  categoryIds: number[];
};

class InterestService {
  async save(userId: number, data: InterestData) {
    // Check all categories exist
    for (const categoryId of data.categoryIds) {
      const category = await categoryRepository.findById(categoryId);

      if (!category) {
        throw new Error("Category not found");
      }
    }

    // Delete old interests
    await interestRepository.deleteByUser(userId);

    // Insert new interests
    for (const categoryId of data.categoryIds) {
      await interestRepository.create(userId, categoryId);
    }

    // Return user's interests
    return await interestRepository.findByUser(userId);
  }
}

export default new InterestService();
