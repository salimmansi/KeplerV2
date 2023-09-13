import { useState } from "react";
import '../assets/css/navBar.css'
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useLanguage } from "../utils/LanguageContext";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { language, toggleLanguage, translate } = useLanguage();


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar nav-bar" >
      <img src={logo} alt="hoobank" className="w-[63px] h-[40px]" />
      <div class="toggle-margin">
        <div class="">
          <div class="button b2" id="button-10">
            <input type="checkbox" class="checkbox" onClick={toggleLanguage} />
            <div class="knobs">
              <span>{language.toUpperCase()}</span>
            </div>
            <div class="layer"></div>
          </div>
        </div>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li onClick={() => setActive('Home')} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${active === 'Home' ? "text-white" : "text-dimWhite"
          }`}>            <a href='#home'>{translate("Home")}</a>
        </li>
        <li onClick={() => setActive('About us')} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${active === 'About us' ? "text-white" : "text-dimWhite"
          }`}>            <a href='#history'>{translate("About us")} </a>
        </li>
        <li onClick={() => setActive('Events')} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${active === 'Events' ? "text-white" : "text-dimWhite"
          }`}>            <a href='#banner'>{translate("Events")} </a>
        </li>
        <li onClick={() => setActive('Travel')} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${active === 'Travel' ? "text-white" : "text-dimWhite"
          }`}>            <a href='#travel'> {translate("Travel")}</a>
        </li>
        <li onClick={() => setActive('Contact Us')} className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 ${active === 'Contact Us' ? "text-white" : "text-dimWhite"
          }`}>            <a href='#contact'>{translate("Contact Us")} </a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-40`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
