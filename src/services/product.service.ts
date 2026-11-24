import { CreateProductInput, UpdateProductInput } from "../schemas/product.schema.js";
import { prisma } from "../lib/prisma.js";

export const getAllProducts = async() => {
  return prisma.product.findMany({
    orderBy: {
      id: "asc"
    }
  });
};

export const getProductById = async(id: number) => {
  return prisma.product.findUnique({
    where: {
      id
    }
  });
};

export const createProduct = async(input: CreateProductInput) => {
  return prisma.product.create({
    data: {
      name: input.name,
      price: input.price
    }
  })
};

export const editProduct = async(
  id: number,
  input: UpdateProductInput,
) => {
  return prisma.product.update({
    where: {
      id
    },
    data: input
  });
};

export const removeProduct = async(id: number) => {
  return prisma.product.delete({
    where: {
      id
    }
  });
};
