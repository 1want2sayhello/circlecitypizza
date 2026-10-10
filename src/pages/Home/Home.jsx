import styles from "./Home.module.scss";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Showcase from "./components/Showcase/Showcase";
import Locations from "./components/Locations/Locations";
const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <Intro />
      <Showcase />
      <Locations />
    </section>
  );
};

export default Home;
