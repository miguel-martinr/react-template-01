import { LOGIN_URL } from "./constants";

export interface PostLoginParams {
  email: string;
  password: string;
}

export let authorizationToken = "";

export const postLogin = async ({ email, password }: PostLoginParams) => {
  return { token: "123", userId: "123" };
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message || "Failed to login");
  }

  const { token, userId } = await response.json();
  return { token, userId };
};
