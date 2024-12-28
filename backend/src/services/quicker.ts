import jwt from "jsonwebtoken";
import { config } from "../config/config";

export default {
  createToken: (data: any) => {
    const token = jwt.sign(data, config.get("JWT_SECRET"), {
      expiresIn: "30d",
    });
    return token;
  },
};
