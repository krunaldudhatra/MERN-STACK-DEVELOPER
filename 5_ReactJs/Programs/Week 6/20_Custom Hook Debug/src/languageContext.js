// import { createContext, useContext, useState } from "react";

// export const languageContext = createContext();

// // debug the below custom hook
// export const getLanguageValue = () => {
//   const value = useContext(languageContext);
//   return value;
// };

// // debug the below context Provider
// export const LanguageContextProvider = () => {
//   const [language, setLanguage] = useState("English");

//   return (
//     <languageContext.Provider
//       value={{ language, setLanguage }}
//     >
//     </languageContext.Provider>
//   );
// };
import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

// Custom hook to get language value
export const getLanguageValue = () => {
  const context = useContext(languageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }
  return context;
};

// Language context provider
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

