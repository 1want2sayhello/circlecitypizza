import styles from "./Card.module.scss";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
