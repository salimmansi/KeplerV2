import React from "react";
import { useLanguage } from "../utils/LanguageContext";

const Button = ({ styles }) => {
    const { translate } = useLanguage();

    return (
        <button
            type="button"
            className={`ss:py-4 ss:px-6 font-poppins font-medium ss:text-[18px] py-[2.5vw] px-[3.5vw] text-[1.4 vw] text-primary bg-red-800 rounded-[10px] outline-none ${styles}`}>
            <a href="#banner">{translate('Get Started')}</a>     </button>
    )

};

export default Button;
