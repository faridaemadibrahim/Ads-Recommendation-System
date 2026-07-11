import prisma from "../config/prisma";

class InterestRepository {
  async create(userId: number, categoryId: number) {
    return prisma.userInterest.create({
      data: {
        userId,
        categoryId,
      },
    });
  }

  async findByUser(userId: number) {
    return prisma.userInterest.findMany({
      where: {
        userId,
      },
      include: {
        category: true,
      },
    });
  }

  async deleteByUser(userId: number) {
    return prisma.userInterest.deleteMany({
      where: {
        userId,
      },
    });
  }
}

export default new InterestRepository();
