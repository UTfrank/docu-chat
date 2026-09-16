import { Router } from "express";
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../controllers/user.controller";

const router = Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;