import prisma from "../config/db.config";

export default {
  createChatroom: (userId: number, title: string, passcode: string) => {
    console.log("inside query");
    return prisma.chatGroup.create({
      data: {
        title,
        passcode,
        userId,
      },
    });
  },

  getChatrooms: (userId: number) => {
    return prisma.chatGroup.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getChatroom: (chatGroupId: string) => {
    return prisma.chatGroup.findUnique({
      where: {
        id: chatGroupId,
      },
    });
  },

  updateChatgroup: (title: string, passcode: string, id: string) => {
    return prisma.chatGroup.update({
      data: {
        passcode,
        title,
      },
      where: {
        id,
      },
    });
  },
};
