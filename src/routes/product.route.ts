import { Router } from "express";
import { addProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import { createProductSchema, updateProductSchema } from "../schemas/product.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

// router.get("/?category=:category")

router.post("/", validateBody(createProductSchema), addProduct);

router.put("/:id", validateBody(updateProductSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;