import styles from "./BookFormContainer.module.css";
import { BookForm } from "./BookForm.jsx";

export const BookFormContainer = ({
  addBook,
  toggleFormVisibility,
  isFormVisible,
  bookToEdit,
  editBook,
  setBookToEdit,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (isFormVisible) {
      setBookToEdit(null);
    }
    toggleFormVisibility();
  };

  let key = null;
  let label = "Add New Book";

  if (bookToEdit) {
    key = bookToEdit.id;
  }

  if (isFormVisible) {
    label = "Cancel";
  }

  let form = null;
  if (isFormVisible) {
    form = (
      <BookForm
        key={key}
        addBook={addBook}
        bookToEdit={bookToEdit}
        editBook={editBook}
        toggleFormVisibility={toggleFormVisibility}
        setBookToEdit={setBookToEdit}
      />
    );
  }

  return (
    <>
      <button className={styles["submit__button"]} onClick={handleClick}>
        {label}
      </button>
      {form}
    </>
  );
};
