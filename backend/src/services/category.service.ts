import prisma from "../config/prisma";

class CategoryService {
  async create(name: string) {
    const existingCategory = await prisma.category.findUnique({
      where: {
        name,
      },
    });

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return category;
  }
  async getAll() {
    const categories = await prisma.category.findMany();
    return categories;
  }
  async getById(id: number) {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
  async update(id: number, name: string) {
    const existingCategory = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!existingCategory) {
      throw new Error("Category not found");
    }

    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return category;
  }
  async delete(id: number) {
    const existingCategory = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    if (!existingCategory) {
      throw new Error("Category not found");
    }
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    return category;
  }
}
export default new CategoryService();
