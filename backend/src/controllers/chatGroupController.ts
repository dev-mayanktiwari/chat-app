import { Request, Response } from "express";
import { IAuthenticatedRequest } from "../middlewares/authMiddlewares";
import chatRoomDBServices from "../services/chatRoomDBServices";

export default {
  store: async (request: Request, res: Response) => {
    try {
      const req = request as IAuthenticatedRequest;
      const body = req.body;
      const user = req.authenticatedUser;

      await chatRoomDBServices.createChatroom(
        Number(user.id),
        body.title,
        body.passcode
      );

      return res.status(200).json({ message: "Chat group created" });
    } catch (error) {
      console.error("Chat group store error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  index: async (request: Request, res: Response) => {
    try {
      const req = request as IAuthenticatedRequest;
      const user = req.authenticatedUser;

      const chatGroups = await chatRoomDBServices.getChatrooms(Number(user.id));

      return res
        .status(200)
        .json({ message: "Chatgroups fetched successfully", data: chatGroups });
    } catch (error) {
      console.error("Chat group index error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
