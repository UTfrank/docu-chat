import express, { Request, Response } from "express";
import productRoutes from "./routes/product.route";
import userRoutes from "./routes/user.route";

const app = express();
app.use(express.json());

const PORT = 8000;

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
