import prisma from "../config/db.config";

export default {
  findUserByEmail: (email: string) => {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  },

  createUser: (data: any) => {
    return prisma.user.create({
      data,
    });
  },
};
