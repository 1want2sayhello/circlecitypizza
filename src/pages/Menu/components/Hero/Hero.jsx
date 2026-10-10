import hero from "../../../../assets/images/menu-hero.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src={hero} alt="menu hero" />
      </div>
      <div className={styles.content}>
        <div className={styles.headline}>
          <span className={styles.header}>
            <h2 className={styles.accent}> New! </h2>
            <h2> Italian Street-Style Pizza </h2>
          </span>
          <span className={styles.tagline}>
            Get any signature pizza in a cone - just like the streets of Naples.
          </span>
        </div>
        <div className={styles.cta}>
          <button type="button">View Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
