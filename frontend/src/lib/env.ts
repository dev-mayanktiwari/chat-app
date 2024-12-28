class Env {
  static APP_URL: string = process.env.NEXT_PUBLIC_API_URL as string;
  static BACKEND_URL: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;
}

export default Env;