import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="circle city pizza logo" />
      </div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/menu">View Menu</Link>
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
