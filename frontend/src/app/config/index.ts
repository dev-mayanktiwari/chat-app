import dotenv from "dotenv";
dotenv.config();

const _config = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

export const config = {
  get(key: string): string {
    //@ts-ignore
    const value = _config[key];
    if (!value) {
      console.log(`Error in accessing ${key} value`);
    }
    //@ts-ignore
    return _config[key];
  },
};
