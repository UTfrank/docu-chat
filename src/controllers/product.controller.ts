import { Response, Request } from "express";
import { getAllProducts, getProductById, createProduct, editProduct, removeProduct } from "../services/product.service.js";

export const getProducts = (req: Request, res: Response) => {
  const products = getAllProducts();
  res.json(products);
}

export const getProduct = (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = getProductById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
}

export const addProduct = (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || typeof price !== "number") {
    res.status(400).json({ message: "Valid name and price are required" });
    return;
  }

  const newProduct = createProduct({ name, price });
  
  res.status(201).json({
    message: "Product created successfully",
    product: {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
    },
  });
}

export const updateProduct = (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = editProduct(productId, req.body)

  if(!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json({
    message: "Product updated successfully",
    product,
  });

}

export const deleteProduct = (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const deleted = removeProduct(productId);

  if(!deleted) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json({
    message: "Product deleted successfully"
  })
}