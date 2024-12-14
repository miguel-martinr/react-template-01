import { useNavigate } from "react-router";
import { getLogout } from "../api/getLogout";
import styles from "./LogoutButton.module.scss";
import { useLoginContext } from "../context/LoginContext";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const { setToken, setUserId } = useLoginContext();

  const handleLogout = async () => {
    const logout = getLogout();
    setToken("");
    setUserId("");
    await logout;
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
