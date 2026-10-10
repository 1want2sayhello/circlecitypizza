import downtownIndianapolis from "../../../../assets/images/downtown-location.webp";
import greenwood from "../../../../assets/images/greenwood-location.webp";
import styles from "./Locations.module.scss";

const Locations = () => {
  return (
    <section className={styles.locations}>
      <div className={styles.bar}></div>
      <div className={styles.content}>
        <h2> Visit Our Locations </h2>
        <div className={styles.location}>
          <div className={styles.image}>
            <img
              src={downtownIndianapolis}
              alt="downtown Indianapolis location"
            />
          </div>
          <div className={`${styles.info} ${styles.right}`}>
            <h3>Downtown Indianapolis </h3>
            <span>
              8912 East Pennsylvania Ave <br />
              Indianapolis, IN 46240
            </span>
            <div className={`${styles.buttons} ${styles.right}`}>
              <button type="button" className={styles.cta}>
                Get Directions
              </button>
              <button type="button" className={styles.cta}>
                Order Here
              </button>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.location}>
          <div className={`${styles.info} ${styles.left}`}>
            <h3> East Greenwood </h3>
            <span>
              6120 W Lefhang Rd <br />
              Greenwood, IN 46142
            </span>
            <div className={`${styles.buttons} ${styles.left}`}>
              <button type="button" className={styles.cta}>
                Get Directions
              </button>
              <button type="button" className={styles.cta}>
                Order Here
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <img src={greenwood} alt="east Greenwood location" />
          </div>
        </div>
      </div>
      <div className={styles.bar}></div>
    </section>
  );
};

export default Locations;
