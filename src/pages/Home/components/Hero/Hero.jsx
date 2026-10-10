import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.header}>
          <h1> A Taste of Italy </h1>
          <h1> Right in Naptown </h1>
        </span>
        <p>
          The best local spot to get authentic Italian pizza <br /> with your
          favorite American sides since 2018
        </p>

        <span className={styles.buttons}>
          <button type="button" className={`${styles.cta} ${styles.primary}`}>
            Order Pickup
          </button>
          <button type="button" className={`${styles.cta} ${styles.secondary}`}>
            Order Delivery
          </button>
        </span>
      </div>
      <div className={styles.bar}>
        <h4>Pizza</h4>
        <span>●</span>
        <h4>Pasta</h4>
        <span>●</span>
        <h4>Bruschetta</h4>
        <span>●</span>
        <h4>Wings</h4>
        <span>●</span>
        <h4>Salads</h4>
        <span>●</span>
        <h4>Garlic Knots</h4>
        <span>●</span>
        <h4>Breadsticks</h4>
      </div>
    </section>
  );
};

export default Hero;
