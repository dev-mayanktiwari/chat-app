import e, { Request, Response } from "express";
import dbAuthService from "../services/dbAuthService";
import jsonwebtoken from "jsonwebtoken";
import quicker from "../services/quicker";

interface LoginPayload {
  name: string;
  email: string;
  provider: string;
  oauth_id: string;
  image?: string;
}

class authController {
  async login(req: Request, res: Response) {
    try {
      const body: LoginPayload = req.body;
      const findUser = await dbAuthService.findUserByEmail(body.email);

      if (!findUser) {
        const findUser = await dbAuthService.createUser(body);
      }

      const JWTPayload = {
        name: findUser?.name,
        email: findUser?.email,
        id: findUser?.id,
      };

      const token = quicker.createToken(JWTPayload);
      return res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new authController();
