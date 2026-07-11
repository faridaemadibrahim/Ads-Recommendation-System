import prisma from "../config/prisma";
class AdRepository {
  async create(data: {
    title: string;
    description: string;
    url: string;
    type: "YOUTUBE" | "FACEBOOK" | "IMAGE" | "VIDEO";
    categoryId: number;
  }) {
    return prisma.ad.create({
      data,
      include: {
        category: true,
      },
    });
  }

  async findAll() {
    return prisma.ad.findMany({
      include: {
        category: true,
      },
    });
  }

  async findById(id: number) {
    return prisma.ad.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });
  }

  async update(
    id: number,
    data: {
      title?: string;
      description?: string;
      url?: string;
      type?: AdType;
      categoryId?: number;
    },
  ) {
    return prisma.ad.update({
      where: {
        id,
      },
      data,
      include: {
        category: true,
      },
    });
  }

  async delete(id: number) {
    return prisma.ad.delete({
      where: {
        id,
      },
    });
  }
  async findByCategories(categoryIds: number[]) {
    if (categoryIds.length === 0) {
      return [];
    }

    return prisma.ad.findMany({
      where: {
        categoryId: {
          in: categoryIds,
        },
        isActive: true,
      },
      include: {
        category: true,
      },
    });
  }
}

export default new AdRepository();
