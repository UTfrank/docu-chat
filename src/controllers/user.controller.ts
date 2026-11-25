import { Request, Response } from "express";
import { getAllUsers, getUserById, createNewUser, editUser, removeUser } from "../services/user.service.js"
import { AppError } from "../utils/app-error.js";


export const getUsers = async(req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  
  if (Number.isNaN(id)) {
    throw new AppError("Invalid User ID", 400);
  }

  const user = await getUserById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.json(user);
};

export const addUser = async (req: Request, res: Response) => {
  const user = await createNewUser(req.body);

  res.status(201).json({
    message: "User created successfully",
    user,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await editUser(id, req.body);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.json({
    message: "User updated successfully",
    user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await removeUser(id);

  if (!deleted) {
    throw new AppError("User not found", 404);
  }

  res.json({
    message: "User deleted successfully",
  });
};
