import { Response, Request, Router } from "express";

const router = Router();

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

router.get("/", (req: Request, res: Response) => {
  res.json(products);
});

router.get("/:id", (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
});

// router.get("/?category=:category")

router.post("/products", (req: Request, res: Response) => {
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
      name,
      price,
    },
  });
});

export default router;