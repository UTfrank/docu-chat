import express, { Request, Response } from 'express';

const app = express();

const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})