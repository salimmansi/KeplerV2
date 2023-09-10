import {clients} from "../constants";
import styles from "../style";
import '../assets/css/spons.scss'
import {
    USAIDLogo,
    UTICALogo,
    ma3anLogo,
    FRIEDRICHLogo,
    fhiLogo,
    FAOLogo,
    CFADLogo
} from "../assets";
const Sponsers = () => (
    <section className={`${styles.flexCenter} my-4`}  >
       <div className="flex-container">
  <div className="slider-container">
    <ul className="slider">
    {clients.map((client) => (
        <li className="slider__slide" key={client.id}>
                         <div
                   
                    className={`flex-1 ${styles.flexCenter} sm:min-w-[132px] min-w-[70px] m-5 slide__content`}>
                    <img
                        src={client.logo}
                        alt="client_logo"
                        className="sm:w-[132px] h-[9vh] w-[70px] object-contain"/>
                </div>
        </li>
   
            ))}
 
     </ul>
  </div>

</div>
    </section>
);

export default Sponsers;
