import React, { useEffect, useState } from "react";
import styles from "./Fade.module.scss";

export interface FadeProps {
  show: boolean;
  children: React.ReactNode;
}

export const Fade = ({ show, children }: FadeProps) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  const className = (
    shouldRender && show ? [styles.fadeIn] : [styles.fadeOut]
  ).join(" ");

  return (
    <div
      className={className}
      onAnimationEnd={onAnimationEnd}
      style={{ display: show ? "block" : "none" }}
    >
      {children}
    </div>
  );
};
