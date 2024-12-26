import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT,
};

export const config = {
  get(key: string): string {
    //@ts-ignore
    const value = _config[key];
    if (!value) {
      console.log(`Error in accessing ${key} value`);
      process.exit(1);
    }
    //@ts-ignore
    return _config[key];
  },
};
