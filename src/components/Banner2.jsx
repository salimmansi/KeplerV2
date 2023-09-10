import styles from "../style";
import Button from "./Button";

const Banner2 = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} data-aos="fade-up">
    <div className="flex-1 flex flex-col flex items-center">
      <h2 className={styles.headingCTI}>Planning your next International Event</h2>
    </div>


  </section>
);

export default Banner2;
