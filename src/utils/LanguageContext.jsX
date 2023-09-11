import React, { createContext, useContext, useState } from "react";
import translations from "./translations.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const a = 22
  const translate = (key) => {
    return translations[language][key] || key;
  };
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };
  return (
    <LanguageContext.Provider value={{ language, translate, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
