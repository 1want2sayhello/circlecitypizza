import Card from "../../../../components/Card/Card";
import hero from "../../../../assets/images/bruschetta-hero.webp";
import accent from "../../../../assets/graphics/header-accent.png";

import dolceFuoco from "../../../../assets/thumbnails/food/pizzas/dolce-fuoco.webp";
import margherita from "../../../../assets/thumbnails/food/pizzas/margherita.webp";
import peraPiccante from "../../../../assets/thumbnails/food/pizzas/pear-prosciutto.webp";
import vodkaRosa from "../../../../assets/thumbnails/food/pizzas/vodka-rosa.webp";
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
          <Card
            title={"Margherita"}
            image={margherita}
            description={
              "San Marzano tomato, fior di latte,fresh basil & extra virgin olive oil."
            }
          />
          <Card
            title={"Dolce Fuoco"}
            image={dolceFuoco}
            description={
              "Spicy soppressata, Calabrian chile, fior di latte & a hot honey drizzle"
            }
          />
          <Card
            title={"Pera Piccante"}
            image={peraPiccante}
            description={
              "Pear, prosciutto, gorgonzola, toasted walnuts, fior di latte, chili flake & hot honey."
            }
          />
          <Card
            title={"Vodka Rosa"}
            image={vodkaRosa}
            description={
              "Creamy vodka sauce, fior di latte, fresh basil & a sprinkle of Parmigiano Reggiano"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
