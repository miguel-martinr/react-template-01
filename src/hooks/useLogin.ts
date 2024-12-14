import { useState } from "react";
import { postLogin } from "../api/postLogin";
import { sleep } from "../common/sleep";

export interface LoginParams {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async ({ email, password }: LoginParams) => {
    setLoading(true);
    await sleep();
    setError(null);
    try {
      const { token, userId } = await postLogin({ email, password });
      return { token, userId };
    } catch (error: any) {
      setError(error.message || "Error logging in");
      return {};
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login, setError };
};
