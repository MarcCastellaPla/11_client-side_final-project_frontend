import styles from "./BookForm.module.css";

export const Form = ({ addBook, setFormVisible }) => {
  return (
    <>
      <button
        className={styles["submit__button"]}
        onClick={() => setFormVisible((prevValue) => !prevValue)} // BUG: The button clicks twice
      >
        Cancel
      </button>
      <form
        className={`${styles["form__wrapper"]}`}
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
          <input name="year" rows="3" required />
          <label htmlFor="status" className={styles["form__label"]}>
            Status
          </label>
          <select name="status" defaultValue="pending">
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit" className={styles["submit__button"]}>
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};
