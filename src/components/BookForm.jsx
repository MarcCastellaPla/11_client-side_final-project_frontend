import { useEffect } from "react";
import styles from "./BookForm.module.css";

export const BookForm = () => {
  useEffect(() => {
    const button = document.querySelector("#newBookButton");
    const bookForm = document.querySelector("#bookForm");

    const handleClick = () => {
      bookForm.classList.toggle(styles["hidden"]);
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const apiLink = `${import.meta.env.VITE_API_URL}/books`;

    const title = formData.get("title");
    const author = formData.get("author");
    const year = formData.get("year");
    const status = formData.get("status");

    const book = {
      title,
      author,
      year,
      status,
    };

    const response = await fetch(apiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book), // body data type must match "Content-Type" header
    });

    console.log(response.json);
    return response.json();
  };

  return (
    <>
      <button id="newBookButton">Add New Book</button>

      <form
        className={`${styles["form__wrapper"]} ${styles["hidden"]}`}
        id="bookForm"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
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
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  );
};
