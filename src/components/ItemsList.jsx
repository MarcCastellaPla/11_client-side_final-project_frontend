import { ItemCard } from "./ItemCard";
import styles from "./ItemsList.module.css";

export const ItemsList = ({ books }) => {
  return (
    <ul className={styles["taskList__items"]}>
      {books.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
