import { Request, Response } from "express";
import dbAuthService from "../services/dbAuthService";
import quicker from "../services/quicker";

interface ILoginPayload extends Request {
  body: {
    name: string;
    email: string;
    provider: string;
    oauth_id: string;
    image?: string;
  };
}
export default {
  login: async (req: Request, res: Response) => {
    try {
      const { body } = req as ILoginPayload;
      let findUser = await dbAuthService.findUserByEmail(body.email);

      if (!findUser) {
        findUser = await dbAuthService.createUser(body);
        if (!findUser) {
          return res.status(400).json({ message: "Failed to create user" });
        }
      }

      const JWTPayload = {
        name: findUser.name,
        email: findUser.email,
        id: findUser.id,
      };

      const token = quicker.createToken(JWTPayload);
      return res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
