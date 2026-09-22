import {
  Product,
  CreateProductInput,
  UpdateProductInput,
} from "../types/product.types.js";

let products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 500000,
  },
  {
    id: 2,
    name: "Phone",
    price: 250000,
  },
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const createProduct = (input: CreateProductInput): Product => {
  const newProduct: Product = {
    id: products.length + 1,
    name: input.name,
    price: input.price,
  };

  products.push(newProduct);

  return newProduct;
};

export const editProduct = (
  id: number,
  input: UpdateProductInput,
): Product | undefined => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return undefined;
  }

  if (input.name !== undefined) {
    product.name = input.name;
  }

  if (input.price !== undefined) {
    product.price = input.price;
  }

  return product;
};

export const removeProduct = (id: number): boolean => {
  const product = products.some(p => p.id === id);

  if (!product) {
    return false;
  }

  products = products.filter(p => p.id !== id);

  return true;
}
