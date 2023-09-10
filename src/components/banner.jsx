import styles from "../style";
import Button from "./Button";
import { useLanguage } from "../utils/LanguageContext";
const Banner = () => {
  const { translate } = useLanguage()
  return (<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} data-aos="fade-up" id="banner">
    <div className="flex-1 flex flex-col flex items-center" data-aos="fade-up">
      <h2 className={styles.headingCTI}>{translate("Exciting Events Across All Tunisia")}</h2>
    </div>


  </section>)
};

export default Banner;
