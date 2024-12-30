import { Router } from "express";
import chatGroupController from "../controllers/chatGroupController";

const chatRouter = Router();

chatRouter.post("/chat-group", chatGroupController.store as any);

export default chatRouter;
