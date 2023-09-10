import styles from "../style";
import Button from "./Button";
import { useLanguage } from "../utils/LanguageContext";
const CTA = () => {
  const { translate } = useLanguage()
  return (<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} data-aos="fade-up">
    <div className="flex-1 flex flex-col flex items-center" >
      <h2 className={styles.headingCTI}>{translate("Looking for exciting B2B events?")}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {translate("Check out our upcoming offerings!")}
      </p>
    </div>


  </section>)
};

export default CTA;
