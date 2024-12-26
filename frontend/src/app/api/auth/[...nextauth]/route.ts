import NextAuth from "next-auth";
import authOptions from "./options";

const nextAuth = NextAuth(authOptions);

export { NextAuth as GET, nextAuth as POST };
