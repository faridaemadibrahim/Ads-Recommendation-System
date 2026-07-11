import prisma from "../config/prisma.js";
import { BehaviorAction } from "../generated/prisma/client.js";

class BehaviorRepository {
  async create(data: {
    userId: number;
    adId: number;
    action: BehaviorAction;
    watchTime?: number;
  }) {
    return prisma.userBehavior.create({
      data,
      include: {
        ad: true,
      },
    });
  }

  async findByUser(userId: number) {
    return prisma.userBehavior.findMany({
      where: {
        userId,
      },
      include: {
        ad: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findByAd(adId: number) {
    return prisma.userBehavior.findMany({
      where: {
        adId,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export default new BehaviorRepository();
