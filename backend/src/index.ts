import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/config";
import authRouter from "./router/authRouter";
import chatRouter from "./router/chatRouter";
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

app.use("/api/v1/auth", authRouter as any);
app.use("/api/v1/chat", chatRouter as any);
app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});
