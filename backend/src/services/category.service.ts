import categoryRepository from "../repositories/category.repository";

class CategoryService {
  async create(name: string) {
    const existingCategory = await categoryRepository.findByName(name);

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    return await categoryRepository.create(name);
  }

  async getAll() {
    return await categoryRepository.findAll();
  }

  async getById(id: number) {
    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }

  async update(id: number, name: string) {
    const existingCategory = await categoryRepository.findById(id);

    if (!existingCategory) {
      throw new Error("Category not found");
    }

    const categoryWithSameName = await categoryRepository.findByName(name);

    if (categoryWithSameName && categoryWithSameName.id !== id) {
      throw new Error("Category name already exists");
    }

    return await categoryRepository.update(id, name);
  }

  async delete(id: number) {
    const existingCategory = await categoryRepository.findById(id);

    if (!existingCategory) {
      throw new Error("Category not found");
    }

    return await categoryRepository.delete(id);
  }
}

export default new CategoryService();
