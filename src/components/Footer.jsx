import styles from "../style";
import { wwbg, mapss } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import '../assets/css/footer.css'
import { useLanguage } from "../utils/LanguageContext";
import { FaLinkedin, FaInstagram, FaFacebook, FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
  const { translate } = useLanguage()
  return (<div className="pg-footer">
    <footer className="footer">

      <div className="footer-content">
        <div className="footer-content-column col-style">
          <div className="footer-logo helper-pd">
            <img src={wwbg} alt="wbg" />
          </div>
          <div className="footer-menu helper-mg">
            <h2 className="footer-menu-name"> {translate("Follow Us")} </h2>
            <ul id="menu-get-started" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="https://www.instagram.com/keplertravel/" target="_blank" className="flex">
                  <FaInstagram size={25} />
                  Instagram
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="https://www.facebook.com/profile.php?id=100075745255608" className="flex" target="_blank">
                  <FaFacebook size={25} />

                  Facebook
                </a>              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="https://www.linkedin.com/company/kepler-travel-services" className="flex" target="_blank">
                  <FaLinkedin size={25} />

                  LinkedIn
                </a>              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column column-layout">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> {translate("Company")} </h2>
            <ul id="menu-company" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#" className="flex"><FaLocationArrow size={35} /> <span className="link-style">Bureau 308 Megrine Business Center, Route Z4 Saint Gobain 2033 Megrine - Tunisie</span></a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#" className="flex"><FaPhone /><span className="link-style">(+216) 79 29 75 38</span></a>
              </li>

            </ul>
          </div>

        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Contact</h2>
            <ul id="menu-quick-links" className="footer-menu-list">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#" className="flex"><FaEnvelope size={15} className="svg-style" /><span className="link-style">benrached@keplertravel.tn</span></a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#" className="flex"><FaEnvelope size={15} className="svg-style" /><span className="link-style">mice@keplertravel.tn</span></a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a target="_blank" rel="noopener noreferrer" href="#" className="flex"><FaEnvelope size={15} className="svg-style" /><span className="link-style">sales@keplertravel.tn</span></a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a target="_blank" rel="noopener noreferrer" href="#" className="flex"><FaEnvelope size={15} className="svg-style" /><span className="link-style">klai@keplertravel.tn</span></a>
              </li>

            </ul>
          </div>
        </div>
        <div className="footer-content-column column-style">

          <img src={mapss} alt="maps" className="w-64 h-auto mt-5 mx-2 rounded-lg object-contain " />
        </div>
        <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
          <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
        </svg>
          <a className="footer-social-link linkedin" href="#" target="_blank">

          </a>
          <a className="footer-social-link twitter" href="#" target="_blank">

          </a>
          <a className="footer-social-link youtube" href="#" target="_blank">

          </a>
          <a className="footer-social-link github" href="#" target="_blank">

          </a>
        </div>
      </div>

    </footer>
  </div>)
};

export default Footer;
