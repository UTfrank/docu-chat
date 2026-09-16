import { Router } from "express";
import { addProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

// router.get("/?category=:category")

router.post("/", addProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;