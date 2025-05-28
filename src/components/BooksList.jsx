import styles from "./BooksList.module.css";
import { BookCard } from "./BookCard";

export const BooksList = ({
  books,
  isLoading,
  showEditForm,
  deleteBook,
  setBookToEdit,
}) => {

  if (isLoading) {
    return <h3 className={styles["books__loading"]}>Loading Books...</h3>;
  }

  return (
    <ul className={styles["books__list"]}>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard
            book={book}
            showEditForm={showEditForm}
            deleteBook={deleteBook}
            setBookToEdit={setBookToEdit}
          />
        </li>
      ))}
    </ul>
  );
};
