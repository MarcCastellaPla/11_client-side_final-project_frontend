import styles from "./ListContainer.module.css";

export const ListContainer = ({ children }) => {
  return <main className={styles["taskList__wrapper"]}>{children}</main>;
};
