import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useLanguage } from "../utils/LanguageContext";

const FeatureCard = ({ icon, title, content, index }) => {
  const { translate } = useLanguage()
  return (<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {translate(title)}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {translate(content)}
      </p>
    </div>
  </div>)
};

const Business = () => {
  const { translate } = useLanguage();

  return (<section id="features" className={layout.sectionrow} data-aos="fade-up">
    <div className=''>
      <h2 className={styles.heading2} >
        {translate("Mission And Vision")}
      </h2>


    </div>

    <div className={``}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} data-aos="fade-up" data-aos-delay="300" />
      ))}
    </div>
  </section>)
};

export default Business;
