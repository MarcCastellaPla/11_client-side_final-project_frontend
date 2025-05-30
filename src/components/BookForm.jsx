import styles from "./BookForm.module.css";
import { useBookForm } from "../hooks/useBookForm";

export const BookForm = ({
  addBook,
  bookToEdit,
  editBook,
  toggleFormVisibility,
  setBookToEdit,
}) => {
  const {
    title,
    author,
    year,
    status,
    titleText,
    buttonText,
    handleSubmit,
  } = useBookForm(
    addBook,
    bookToEdit,
    editBook,
    toggleFormVisibility,
    setBookToEdit
  );

  return (
    <div className={styles["form__wrapper"]}>
      <h2 className={styles["form__title"]}>{titleText}</h2>
      <form id="bookForm" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="title" className={styles["form__label"]}>
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            required
            defaultValue={title}
          />

          <label htmlFor="author" className={styles["form__label"]}>
            Author
          </label>
          <input
            name="author"
            placeholder="Enter your author name"
            required
            defaultValue={author}
          />

          <div className={styles["form__row"]}>
            <div>
              <label htmlFor="year" className={styles["form__label"]}>
                Publication Year
              </label>
              <input name="year" required defaultValue={year} />
            </div>

            <div>
              <label htmlFor="status" className={styles["form__label"]}>
                Status
              </label>
              <select name="status" defaultValue={status}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>

          <button type="submit" className={styles["submit__button"]}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};
