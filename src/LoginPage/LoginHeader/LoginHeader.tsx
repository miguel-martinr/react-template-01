import { ClimbingBoxLoader } from "react-spinners";

import { Fade } from "../../Fade";
import styles from "./LoginHeader.module.scss";

interface LoginHeaderProps {
  isLoading: boolean | null;
  iconColor: string;
}

export const LoginHeader = ({ isLoading, iconColor }: LoginHeaderProps) => {
  const tlteClassName = {
    true: styles.moveRight,
    false: styles.moveLeft,
    null: "",
  }[String(isLoading)];

  return (
    <div className={styles.loginHeader}>
      <div>
        <Fade show={!!isLoading}>
          <ClimbingBoxLoader color={iconColor} />
        </Fade>
      </div>
      <h1 className={tlteClassName}>Login</h1>
    </div>
  );
};
