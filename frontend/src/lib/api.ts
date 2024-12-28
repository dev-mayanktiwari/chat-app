import axios from "axios";
import { LOGIN_URL } from "./apiEndpoints";

export const login = (payload: any) => {
  try {
    const response = axios.post(LOGIN_URL, payload);
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
