// import { createContext, useContext, useState } from "react";

// export const themeContext = createContext();

// // debug the below custom hook
// export const getThemeValue = () => {
//   const value = useContext(themeContext);
//   return value;
// };
// // debug the below context Provider
// export const ThemeContextProvider = () => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <themeContext.Provider value={{ theme, setTheme }}></themeContext.Provider>
//   );
// };
import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

// Custom hook to get theme value
export const getThemeValue = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

// Theme context provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
