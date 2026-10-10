import logo from "../../assets/logo/logo.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.newsletter}>
          <div className={styles.description}>
            <h3> Stay in the Circle </h3>
            <p>
              Keep up with the latest deals, exclusive offers, and the taste of
              Italy - delivered right to your inbox.
            </p>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your email..." />
            <button type="submit">Submit</button>
          </div>
        </div>

        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <span className={styles.tag}> A Taste of Italy in Naptown </span>
          </div>
          <div className={styles.socials}>
            <div className={styles.review}>
              <span>
                Stopped by & have comments? <br />
                Leave us a review!
              </span>
              <div className={styles.icons}>
                <i class="fa-brands fa-yelp"></i>
                <i class="fa-brands fa-google"></i>
              </div>
            </div>
            <div className={styles.followUs}>
              <span> Don't forget to follow us </span>
              <div className={styles.icons}>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.bar}>
        <span> Circle City Pizza &copy; 2026 | All Rights Reserved</span>
        <span className={styles.privacy}> Privacy & Cookies </span>
      </div>
    </footer>
  );
};

export default Footer;
