import Card from "../../../../components/Card/Card";

import calabrianChili from "../../../../assets/thumbnails/food/wings/calabrian-chili.webp";
import balsamicRosemary from "../../../../assets/thumbnails/food/wings/balsamic-rosemary.webp";
import lemonPepper from "../../../../assets/thumbnails/food/wings/lemon-pepper-pecorino.webp";

import knots from "../../../../assets/thumbnails/food/sides/garlic-knots.webp";
import parmFries from "../../../../assets/thumbnails/food/sides/parm-fries.webp";
import bruschetta from "../../../../assets/images/bruschetta-hero.webp";

import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.top}>
        <span>
          <h2> Wings Done Right... </h2>
        </span>
        <div className={styles.grid}>
          <Card
            image={calabrianChili}
            title={"Calabrian Chili"}
            description={
              "Calabrian chile, roasted garlic, Parmesan, parsley & extra virgin olive oil."
            }
          />
          <Card
            image={balsamicRosemary}
            title={"Balsamic Rosemary"}
            description={
              "Balsamic glaze, fresh rosemary, roasted garlic, Parmesan & cracked pepper."
            }
          />
          <Card
            image={lemonPepper}
            title={"Lemon Pepper Pecorino"}
            description={
              "Fresh lemon, cracked black pepper, Pecorino Romano, garlic & parsley"
            }
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.grid}>
          <Card
            image={bruschetta}
            title={"Bruschetta"}
            description={
              "Toasted artisan bread topped with fresh tomatoes, basil, garlic, and a balsamic glaze."
            }
          />
          <Card
            image={parmFries}
            title={"Loaded Parmesan Fries"}
            description={
              "Crispy golden fries topped with shaved parmesan, fresh parsley, and a drizzle of truffle aioli and lemon."
            }
          />
          <Card
            image={knots}
            title={"Garlic Knots"}
            description={
              "Mozzarella-stuffed garlic knots brushed with roasted garlic butter and topped with parmesan."
            }
          />
        </div>
        <span className={styles.bottomTag}>
          <h2> ...& Don't Forget the Sides! </h2>
        </span>
      </div>
    </section>
  );
};

export default Showcase;
