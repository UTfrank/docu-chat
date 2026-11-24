import { Response, Request } from "express";
import { getAllProducts, getProductById, createProduct, editProduct, removeProduct } from "../services/product.service.js";
import { AppError } from "../utils/app-error.js";

export const getProducts = async(req: Request, res: Response) => {
  const products = await getAllProducts();
  res.json(products);
}

export const getProduct = async(req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    throw new AppError("Invalid Product ID", 400);
  }

  const product = await getProductById(id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  res.json(product);
}

export const addProduct = async(req: Request, res: Response) => {
  const product = await createProduct(req.body);
  
  res.status(201).json({
    message: "Product created successfully",
    product,
  });
}

export const updateProduct = async(req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = await editProduct(id, req.body)

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  res.json({
    message: "Product updated successfully",
    product,
  });

}

export const deleteProduct = async(req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await removeProduct(id);

  if(!deleted) {
    throw new AppError("Product not found", 404);
  }

  res.json({
    message: "Product deleted successfully"
  })
}