import styles from "./BookForm.module.css";
import { Form } from "./Form.jsx";

export const BookForm = ({ addBook, toggleFormVisibility, isFormVisible }) => {
  if (isFormVisible) {
    return (
      <Form addBook={addBook} toggleFormVisibility={toggleFormVisibility} />
    );
  }

  return (
    <button className={styles["submit__button"]} onClick={toggleFormVisibility}>
      Add New Book
    </button>
  );
};
