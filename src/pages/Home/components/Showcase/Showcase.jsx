import Card from "../../../../components/Card/Card";

import wings from "../../../../data/menu/wings.json";
import sides from "../../../../data/menu/sides.json";

import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.top}>
        <span>
          <h2> Wings Done Right... </h2>
        </span>
        <div className={styles.grid}>
          {wings
            .filter((wing) => wing.category === "showcase")
            .map((wing) => (
              <Card
                key={wing.title}
                title={wing.title}
                image={wing.image}
                description={wing.description}
              />
            ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.grid}>
          {sides
            .filter((side) => side.category === "showcase")
            .map((side) => (
              <Card
                key={side.title}
                title={side.title}
                image={side.image}
                description={side.description}
              />
            ))}
        </div>
        <span className={styles.bottomTag}>
          <h2> ...& Don't Forget the Sides! </h2>
        </span>
      </div>
    </section>
  );
};

export default Showcase;
