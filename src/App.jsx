import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Services, Testimonials, Hero, Sponsers, Contact, Banner, VidCollage, Banner2, Destination, Travel } from "./components";
import './assets/css/navBar.css';
import { useLanguage } from "./utils/LanguageContext"; // Import the language context hook

const App = () => {
  const { translate } = useLanguage();
  const translatedText = {
    title: translate("Exciting Events Across All Tunisia With"),
    description: translate("Welcome to Kepler, your gateway to unforgettable travel experiences and exciting events. Our travel agency is passionate about curating the perfect Event package tailored to your interests."),
  };
  return (
    <div className="bg-primary w-full overflow-hidden section-bg " data-aos="fade-up">
      <div className={`${styles.paddingX} ${styles.flexCenter} nav-wrapper`}>
        <div className={`${styles.boxWidth} nav-container`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} section-bg section-mg`}>
        <div className={`${styles.boxWidth} section-padding `} data-aos="fade-up">
          <Hero translatedText={translatedText} />
        </div>
      </div>
      <Sponsers />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} section-bg`}>
        <div className={`${styles.boxWidth}`}>
          <CardDeal />

          <Business />
          <Billing />
          <CTA />
          <Testimonials />
          <Banner />
          <VidCollage />
          <Banner2 />
          <Destination />
          <Sponsers />
          <Travel />
          <Services />
          <Sponsers />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default App;
