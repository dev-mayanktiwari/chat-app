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

  show: async (req: Request, res: Response) => {
    try {
      const chatGroupId = req.params.id;

      const chatGroup = await chatRoomDBServices.getChatroom(chatGroupId);

      return res
        .status(200)
        .json({ message: "Chatgroup fetched successfully", data: chatGroup });
    } catch (error) {
      console.error("Chat group show error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const chatGroupId = req.params.id;

      const updatedChatgroup = await chatRoomDBServices.updateChatgroup(
        body.title,
        body.passcode,
        chatGroupId
      );

      return res.json(201).json({
        message: "Chatgroup updated successfully",
        data: updatedChatgroup,
      });
    } catch (error) {
      console.error("Chat group update error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
