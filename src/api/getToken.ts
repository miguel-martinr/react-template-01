import { TOKEN_URL } from "./constants";

export const getToken = async () => {
  const response = await fetch(TOKEN_URL, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message || "Failed to get token");
  }

  const { token, userId } = await response.json();
  return { token, userId };
};
