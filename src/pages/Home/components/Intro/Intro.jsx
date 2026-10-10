import Card from "../../../../components/Card/Card";
import hero from "../../../../assets/images/bruschetta-hero.webp";
import accent from "../../../../assets/graphics/header-accent.png";

import pizzas from "../../../../data/menu/pizzas.json";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.header}>
        <div className={styles.hero}>
          <img src={hero} alt="intro bruschetta hero" />
        </div>
        <div className={styles.content}>
          <h2> A Taste of Circle City </h2>
          <p>
            Get one of our delicious 10” or 18” pizzas with an assortment of
            sides or bring home a whole meal of sides! Visit our downtown and
            Greenwood locations today!
          </p>
        </div>
      </div>
      <div className={styles.signatures}>
        <span className={styles.tag}>
          <span>
            <img src={accent} alt="" />
          </span>
          <h2> Signature Pizzas </h2>
          <span className={styles.flippedAccent}>
            <img src={accent} alt="" />
          </span>
        </span>

        <div className={styles.pizzaGrid}>
          {pizzas
            .filter((pizza) => pizza.category === "signature")
            .map((pizza) => (
              <Card
                title={pizza.title}
                image={pizza.image}
                description={pizza.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
