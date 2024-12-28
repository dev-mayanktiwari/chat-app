import { Router } from "express";
import authController from "../controllers/authController";

const authRouter = Router();

authRouter.post("/login", authController.login as any);

export default authRouter;