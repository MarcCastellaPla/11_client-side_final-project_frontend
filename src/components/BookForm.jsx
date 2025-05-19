import { useState } from "react";
import styles from "./BookForm.module.css";
import { Form } from "./Form.jsx";

export const BookForm = ({ addBook }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  if (isFormVisible) {
    return <Form addBook={addBook} setFormVisible={setFormVisible} />;
  }

  return (
    <button
      className={styles["submit__button"]}
      onClick={() => setFormVisible((prevValue) => !prevValue)}
    >
      Add New Book
    </button>
  );
};
