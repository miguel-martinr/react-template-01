import { LOGOUT_URL } from "./constants";

export const getLogout = async () => {
  const response = await fetch(LOGOUT_URL, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message || "Failed to logout");
  }
};
