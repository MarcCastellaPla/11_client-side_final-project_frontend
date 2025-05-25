import { BookCard } from "./BookCard";
import styles from "./BooksList.module.css";

export const BooksList = ({ books, showEditForm }) => {
  return (
    <ul className={styles["taskList__items"]}>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} showEditForm={showEditForm} />
        </li>
      ))}
    </ul>
  );
};
