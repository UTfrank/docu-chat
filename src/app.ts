import express, { Request, Response } from "express";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
  });
});

export default app;