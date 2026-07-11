import prisma from "../config/prisma";

class CategoryRepository {
  async create(name: string) {
    return prisma.category.create({
      data: {
        name,
      },
    });
  }

  async findById(id: number) {
    return prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  async findByName(name: string) {
    return prisma.category.findUnique({
      where: {
        name,
      },
    });
  }

  async findAll() {
    return prisma.category.findMany();
  }

  async update(id: number, name: string) {
    return prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  async delete(id: number) {
    return prisma.category.delete({
      where: {
        id,
      },
    });
  }
}

export default new CategoryRepository();
