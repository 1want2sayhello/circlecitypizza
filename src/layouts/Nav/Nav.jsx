import logo from "../../assets/logo/logo.svg";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="circle city pizza logo" />
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">View Menu</a>
        <a href="#">Our Mission</a>
        <a href="#">Contact Us</a>
        <span>
          <a href="#">Order</a>
        </span>
      </nav>
    </div>
  );
};

export default Nav;
