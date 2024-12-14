import { LogoutButton } from "../LogoutButton";
import styles from "./AppHeader.module.scss";

interface AppHeaderProps {
  shouldShowLogoutButton: boolean;
  children?: React.ReactNode;
}

export const AppHeader = ({
  shouldShowLogoutButton,
  children,
}: AppHeaderProps) => {
  return (
    <div className={styles.container}>
      {children}
      {shouldShowLogoutButton && <LogoutButton />}
    </div>
  );
};
