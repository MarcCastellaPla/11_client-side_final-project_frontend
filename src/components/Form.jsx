import styles from "./BookForm.module.css";

export const BookForm = ({ addBook }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className={styles["form__wrapper"]}>
      <h2 className={styles["form__title"]}>Add a New Book</h2>
      <form
        id="bookForm"
        onSubmit={addBook}
      >
        <div className={styles["form-group"]}>
          <label htmlFor="title" className={styles["form__label"]}>
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            required
          />
          <label htmlFor="author" className={styles["form__label"]}>
            Author
          </label>
          <input
            name="author"
            placeholder="Enter your author name"
            rows="3"
            required
          />
          <label htmlFor="year" className={styles["form__label"]}>
            Publication Year
          </label>
          <input name="year" rows="3" required value={currentYear}/>
          <label htmlFor="status" className={styles["form__label"]}>
            Status
          </label>
          <select name="status" defaultValue="pending">
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="read">Read</option>
          </select>
          <button type="submit" className={styles["submit__button"]}>
            Add Book
          </button>
        </div>
      </form>
      </div>
    </>
  );
};
