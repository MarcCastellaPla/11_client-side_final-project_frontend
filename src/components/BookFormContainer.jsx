import styles from "./BookFormContainer.module.css";
import { BookForm } from "./Form.jsx";

export const BookFormContainer = ({ addBook, toggleFormVisibility, isFormVisible }) => {
  let label = "Add New Book";
  let form = null;

  if (isFormVisible) {
    label = "Cancel";
    form = <BookForm addBook={addBook} toggleFormVisibility={toggleFormVisibility} />;
  }

  return (
    <>
      <button className={styles["submit__button"]} onClick={toggleFormVisibility}>
        {label}
      </button>
      {form}
    </>
  );
};
