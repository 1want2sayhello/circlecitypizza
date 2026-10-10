import Hero from "./components/Hero/Hero";
import styles from "./Menu.module.scss";
const Menu = () => {
  return (
    <section className={styles.menu}>
      <Hero />
    </section>
  );
};

export default Menu;
