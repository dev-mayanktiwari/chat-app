import Env from "./env";

export const BASE_URL = Env.BACKEND_URL;
export const API_URL = Env.API_URL;

const FULL_BASE_URL = `${BASE_URL}/${API_URL}`;
export const LOGIN_URL = `${FULL_BASE_URL}/auth/login`; 