import { Router } from "express";
import chatGroupController from "../controllers/chatGroupController";
import authMiddleware from "../middlewares/authMiddlewares";

const chatRouter = Router();

chatRouter.post(
  "/chat-group",
  authMiddleware as any,
  chatGroupController.store as any
);

export default chatRouter;
