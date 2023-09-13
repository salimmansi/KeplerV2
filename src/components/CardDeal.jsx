import { aboutus } from "../assets";
import styles, { layout } from "../style";
import { useLanguage } from "../utils/LanguageContext";
import {abtbg2} from "../assets"
const CardDeal = () => {
  const { translate } = useLanguage();

  return (<section className={layout.section} id="history" data-aos="fade-up" style={{ backgroundImage: `url(${abtbg2})` }}>
    <div className={layout.sectionInfoBilling}>
      <h2 className={styles.heading2}>
        {translate("Our History")}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-stone-700`}>
        {translate("kepler travel services is a travel agency based in Mégrine, specialized in traveling, organizing , animating seminars, conferences, exhibitions, corporate evenings, product launches, and team building activities. We accompany you from the conception to the realization of your event project, in order to implement all the necessary means for logistical organization and smooth running of your event anywhere in Tunisia and abroad.")}
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={aboutus} alt="aboutus" className="w-[100%] h-[100%]" />
    </div>
  </section>)
};

export default CardDeal;
