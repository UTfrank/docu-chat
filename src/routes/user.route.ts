import { Router, Request, Response } from "express";

const router = Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.json(user);
})

router.post("/", (req: Request, res: Response) => {
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
});

export default router;