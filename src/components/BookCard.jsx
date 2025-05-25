import styles from "./BookCard.module.css";

export const BookCard = ({
  book: { title, author, year, status },
  showEditForm,
}) => {
  const statusModifier = {
    pending: styles["bookCard__status--pending"],
    "in-progress": styles["bookCard__status--in-progress"],
    read: styles["bookCard__status--completed"],
  };

  const titleModifier = {
    pending: styles["bookCard__title--pending"],
    "in-progress": styles["bookCard__title--in-progress"],
    read: styles["bookCard__title--completed"],
  };

  return (
    <>
      <h4 className={`${styles["bookCard__title"]} ${titleModifier[title]}`}>
        {title}
      </h4>
      <p className={styles["bookCard__description"]}>{author}</p>
      <p className={styles["bookCard__description"]}>{year}</p>
      <span
        className={`${styles["bookCard__status"]} ${statusModifier[status]}`}
      >
        {status.toUpperCase()}
      </span>
      <button onClick={showEditForm()}>Edit</button>
    </>
  );
};
