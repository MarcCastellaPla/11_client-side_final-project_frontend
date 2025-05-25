import styles from "./BookFormContainer.module.css";
import { BookForm } from "./BookForm.jsx";

export const BookFormContainer = ({ addBook, toggleFormVisibility, isFormVisible, bookToEdit, editBook, setBookToEdit }) => {
  let label = "Add New Book";
  let form = null;

  const handleClick = (event) => {
    event.preventDefault();
    if (isFormVisible) {
      setBookToEdit(null); 
    }
    toggleFormVisibility();
  }

  let key = null;
  if (bookToEdit) {
     key = bookToEdit.id;
  }

  if (isFormVisible) {
    label = "Cancel";
    form = <BookForm key={key} addBook={addBook} bookToEdit={bookToEdit} editBook={editBook} toggleFormVisibility={toggleFormVisibility} setBookToEdit={setBookToEdit}/>;
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
