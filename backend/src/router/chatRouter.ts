import { Router } from "express";
import chatGroupController from "../controllers/chatGroupController";
import authMiddleware from "../middlewares/authMiddlewares";

const chatRouter = Router();

chatRouter.post(
  "/chat-group",
  authMiddleware as any,
  chatGroupController.store as any
);

chatRouter.get(
  "/chat-group",
  authMiddleware as any,
  chatGroupController.index as any
);

chatRouter.get(
  "/chat-group/:id",
  authMiddleware as any,
  chatGroupController.show as any
);

chatRouter.put(
  "/chat-group/:id",
  authMiddleware as any,
  chatGroupController.update as any
);

chatRouter.delete(
  "/chat-group",
  authMiddleware as any,
  chatGroupController.destroy as any
);

export default chatRouter;
