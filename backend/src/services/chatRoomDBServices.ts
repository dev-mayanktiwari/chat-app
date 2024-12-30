import prisma from "../config/db.config";

export default {
  createChatroom: (userId: number, title: string, passcode: string) => {
    prisma.chatGroup.create({
      data: {
        title,
        passcode,
        userId,
      },
    });
  },
};
