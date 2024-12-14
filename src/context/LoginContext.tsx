import { createContext, useContext, useState } from "react";

interface LoginContextType {
  token: string | null;
  setToken: (token: string | null) => void;

  userId: string | null;
  setUserId: (userId: string | null) => void;

  isFetched: boolean;
  setIsFetched: (isFetched: boolean) => void;
}

export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  return (
    <LoginContext.Provider
      value={{ token, setToken, userId, setUserId, isFetched, setIsFetched }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }
  return context;
};
