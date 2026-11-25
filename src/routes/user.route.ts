import { Router } from "express";
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", validateBody(createUserSchema), addUser);

router.put("/:id", validateBody(updateUserSchema), updateUser);

router.delete("/:id", deleteUser);

export default router;