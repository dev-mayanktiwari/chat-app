import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/config";
import authController from "./controllers/authController";
const app: Application = express();
const PORT = config.get("PORT");

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health route
app.get("/health", (req: Request, res: Response) => {
  res.send("The server is healthy");
});

app.use("/api/v1/auth", authController as any);
app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});
