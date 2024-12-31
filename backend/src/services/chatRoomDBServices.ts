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
};
