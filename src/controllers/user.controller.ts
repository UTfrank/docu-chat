import { Request, Response } from "express";

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
}

export const getUser = (req: Request, res: Response) => {
  res.json(users);
}

export const addUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  if(!name || !email) {
    res.status(400).json({ message: "Name and email are required" });
    return;
  }

  res.status(201).json({
    message: "User created successfully",
    user: {
      name,
      email,
    },
  });
}

export const updateUser = (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if(!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const { name } = req.body;

  if (name !== undefined) {
    user.name = name;
  }

  res.json({
    message: "User updated successfully",
    user,
  });

}

export const deleteUser = (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if(!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  users = users.filter(u => u.id !== userId);

  res.json({
    message: "User deleted successfully"
  })
}