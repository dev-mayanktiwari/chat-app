import { Request, Response, NextFunction } from "express";
import quicker from "../services/quicker";

export interface IAuthenticatedRequest extends Request {
  authenticatedUser: {
    name: string;
    email: string;
    id: string;
  };
}

const authMiddleware = async (
  request: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const req = request as IAuthenticatedRequest;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await quicker.verifyToken(token);
    req.authenticatedUser = decoded;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
