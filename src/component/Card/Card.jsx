import React from "react";
import styles from "./card.module.css";

export default function Card({ children, title, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.children}>{children}</div>
    </div>
  );
}
