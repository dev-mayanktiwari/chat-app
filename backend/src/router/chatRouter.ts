import { Router } from "express";
import chatGroupController from "../controllers/chatGroupController";

const authRouter = Router();

authRouter.post("/chat-group", chatGroupController.store as any);

export default authRouter;
