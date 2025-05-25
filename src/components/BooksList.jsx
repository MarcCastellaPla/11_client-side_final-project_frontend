import { BookCard } from "./BookCard";
import styles from "./BooksList.module.css";

export const BooksList = ({ books, showEditForm, deleteBook, setBookToEdit }) => {
  return (
    <ul className={styles["books__list"]}>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} showEditForm={showEditForm} deleteBook={deleteBook} setBookToEdit={setBookToEdit} />
        </li>
      ))}
    </ul>
  );
};
