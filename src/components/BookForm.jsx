import styles from "./BookForm.module.css";
import { useForm } from "../hooks/useForm";

export const BookForm = ({
  addBook,
  bookToEdit,
  editBook,
  toggleFormVisibility,
  setBookToEdit,
}) => {
  const { isSaving, startSaving, stopSaving } = useForm();

  let title = "";
  let author = "";
  let year = new Date().getFullYear();
  let status = "pending";
  let buttonText = "Add Book";

  if (bookToEdit) {
    title = bookToEdit.title;
    author = bookToEdit.author;
    year = bookToEdit.year;
    status = bookToEdit.status;
    buttonText = "Edit Book";
  }

  if (isSaving) {
    console.log("Saving book...");
    buttonText = "Saving...";
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    startSaving();

    if (bookToEdit) {
      await editBook(event);
      setBookToEdit(null);
    }

    if (!bookToEdit) {
      await addBook(event);
    }

    toggleFormVisibility();
    stopSaving();
  };

  return (
    <>
      <div className={styles["form__wrapper"]}>
        <h2 className={styles["form__title"]}>Add a New Book</h2>
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
              rows="3"
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
    </>
  );
};
