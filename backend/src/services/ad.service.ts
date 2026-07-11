import adRepository from "../repositories/ad.repository";
import categoryRepository from "../repositories/category.repository";
import { AdType } from "../config/prisma";

type CreateAdData = {
  title: string;
  description: string;
  url: string;
  type: AdType;
  categoryId: number;
};

type UpdateAdData = Partial<CreateAdData>;

class AdService {
  async create(data: CreateAdData) {
    const category = await categoryRepository.findById(data.categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    return await adRepository.create(data);
  }

  async getAll() {
    return await adRepository.findAll();
  }

  async getById(id: number) {
    const ad = await adRepository.findById(id);

    if (!ad) {
      throw new Error("Ad not found");
    }

    return ad;
  }

  async update(id: number, data: UpdateAdData) {
    const existingAd = await adRepository.findById(id);

    if (!existingAd) {
      throw new Error("Ad not found");
    }

    // لو المستخدم بعت categoryId فقط
    if (data.categoryId) {
      const category = await categoryRepository.findById(data.categoryId);

      if (!category) {
        throw new Error("Category not found");
      }
    }

    return await adRepository.update(id, data);
  }

  async delete(id: number) {
    const existingAd = await adRepository.findById(id);

    if (!existingAd) {
      throw new Error("Ad not found");
    }

    return await adRepository.delete(id);
  }
}

export default new AdService();
