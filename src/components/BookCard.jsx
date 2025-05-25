import styles from "./BookCard.module.css";

export const BookCard = ({
  book: { id, title, author, year, status },
  showEditForm, deleteBook
}) => {
  const statusModifier = {
    pending: styles["book-card__status--pending"],
    "in-progress": styles["book-card__status--in-progress"],
    read: styles["book-card__status--read"],
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook({ id });
    }
  };



  return (
    <>
      <div className={styles["book-card__title-row"]}>
        <h4 className={styles["book-card__title"]}>
          {title}
        </h4>
        <p className={styles["book-card__year"]}>{year}</p>
      </div>
      <p className={styles["book-card__author"]}>{author}</p>

      <div className={styles["book-card__status-wrapper"]}>
        <span
          className={`${styles["book-card__status"]} ${statusModifier[status]}`}
        >
          {status}
        </span>
      </div>

      <div className={styles["book-card__actions"]}>
        <button className={styles["book-card__edit"]} onClick={() => showEditForm()}>Edit</button>
        <button className={styles["book-card__delete"]} onClick={handleDelete}>
            Delete
        </button>
      </div>
    </>
  );
};
