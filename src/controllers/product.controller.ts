import { Response, Request } from "express";

let products = [
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

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
}

export const getProduct = (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
}

export const addProduct = (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res.status(400).json({ message: "Name and price are required" });
    return;
  }

  const newProduct = {
    id: products.length + 1, name, price
  }

  products.push(newProduct);
  
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
  const product = products.find(p => p.id === productId);

  if(!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const { name } = req.body;

  if (name !== undefined) {
    product.name = name;
  }

  res.json({
    message: "Product updated successfully",
    product,
  });

}

export const deleteProduct = (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = products.find(p => p.id === productId);

  if(!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  products = products.filter(p => p.id !== productId);

  res.json({
    message: "Product deleted successfully"
  })
}