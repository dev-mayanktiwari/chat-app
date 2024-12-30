import jwt, { JwtPayload, verify } from "jsonwebtoken";
import { config } from "../config/config";

interface AuthenticatedUser {
  name: string;
  email: string;
  id: string;
}

export default {
  createToken: (data: any) => {
    const token = jwt.sign(data, config.get("JWT_SECRET"), {
      expiresIn: "30d",
    });
    return token;
  },

  verifyToken: (token: string): AuthenticatedUser => {
    const decoded = verify(token, config.get("JWT_SECRET"));
    if (typeof decoded !== "object" || !decoded) {
      throw new Error("Invalid token");
    }

    const { name, email, id } = decoded as JwtPayload;
    if (!name || !email || !id) {
      throw new Error("Invalid token payload");
    }

    return { name, email, id };
  },
};
