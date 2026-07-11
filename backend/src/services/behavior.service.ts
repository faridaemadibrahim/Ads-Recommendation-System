import behaviorRepository from "../repositories/behavior.repository";
import adRepository from "../repositories/ad.repository";
import { BehaviorAction } from "../generated/prisma/client.js";

type BehaviorData = {
  adId: number;
  action: BehaviorAction;
  watchTime?: number;
};

class BehaviorService {
  async create(userId: number, data: BehaviorData) {
    // Check if the ad exists
    const ad = await adRepository.findById(data.adId);

    if (!ad) {
      throw new Error("Ad not found");
    }

    // Create behavior
    const behavior = await behaviorRepository.create({
      userId,
      adId: data.adId,
      action: data.action,
      watchTime: data.watchTime,
    });

    return behavior;
  }

  async getByUser(userId: number) {
    return await behaviorRepository.findByUser(userId);
  }

  async getByAd(adId: number) {
    const ad = await adRepository.findById(adId);

    if (!ad) {
      throw new Error("Ad not found");
    }

    return await behaviorRepository.findByAd(adId);
  }
}

export default new BehaviorService();
