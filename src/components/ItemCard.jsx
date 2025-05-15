import styles from "./ItemCard.module.css";

export const ItemCard = ({ item: { title, author, year, status } }) => {
  const statusModifier = {
    pending: styles["itemCard__status--pending"],
    "in-progress": styles["itemCard__status--in-progress"],
    completed: styles["itemCard__status--completed"],
  };

  const titleModifier = {
    pending: styles["itemCard__title--pending"],
    "in-progress": styles["itemCard__title--in-progress"],
    completed: styles["itemCard__title--completed"],
  };

  return (
    <>
      <h4 className={`${styles["itemCard__title"]} ${titleModifier[title]}`}>
        {title}
      </h4>
      <p className={styles["itemCard__description"]}>{author}</p>
      <p className={styles["itemCard__description"]}>{year}</p>
      <span
        className={`${styles["itemCard__status"]} ${statusModifier[status]}`}
      >
        {status.toUpperCase()}
      </span>
    </>
  );
};
