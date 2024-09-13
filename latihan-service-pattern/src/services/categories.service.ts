/**
 * src/services/Category.service.ts
 */

import CategoryModel, { Category } from "../models/categories.model";

export const create = async (payload: Category): Promise<Category> => {
  const result = await CategoryModel.create(payload);
  return result;
};

export interface IFindAll {
  query?: unknown;
  limit: number;
  page: number;
}

export const findAll = async (
  query: any,
  limit: number = 10,
  page: number = 1
): Promise<Category[]> => {
  const result = await CategoryModel.find(query)
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 })
    .populate("category");
  return result;
};
export const findOne = async (id: string): Promise<Category | null> => {
  const result = await CategoryModel.findById(id);
  return result;
};
export const update = async (
  id: string,
  payload: Category
): Promise<Category | null> => {
  const result = await CategoryModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const remove = async (id: string): Promise<Category | null> => {
  const result = await CategoryModel.findOneAndDelete({
    _id: id,
  });
  return result;
};
