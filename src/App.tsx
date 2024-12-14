import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { useLoginContext } from "./context/LoginContext";
import { LoginPage } from "./LoginPage";
import { getToken } from "./api/getToken";
import { AppHeader } from "./AppHeader";

function App() {
  const { token, setToken, userId, setUserId, isFetched, setIsFetched } =
    useLoginContext();

  useEffect(() => {
    const tryLogin = async () => {
      try {
        const { token, userId } = await getToken();
        if (token) setToken(token);
        if (userId) setUserId(userId);
      } finally {
        setIsFetched(true);
      }
    };

    tryLogin();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <AppHeader shouldShowLogoutButton={!!(token && userId)}>
            <h1>My App</h1>
          </AppHeader>
        </div>
        <Routes>
          {token && userId ? (
            <>
              <Route path="/" element={<span>Hello world!</span>} />
            </>
          ) : isFetched ? (
            <Route path="*" element={<LoginPage />} />
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
