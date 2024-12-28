import { config } from "@/app/config";

export const BASE_URL = config.get("BACKEND_URL");
export const API_URL = config.get("API_URL");

const FULL_BASE_URL = `${BASE_URL}/${API_URL}`;
export const LOGIN_URL = `${FULL_BASE_URL}/auth/login`;
