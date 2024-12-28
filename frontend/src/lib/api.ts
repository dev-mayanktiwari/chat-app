import Env from "./env";

export const BASE_URL = Env.BACKEND_URL;
export const API_URL = `${BASE_URL}/API_URL`;
export const LOGIN = `${API_URL}/auth/login`;
