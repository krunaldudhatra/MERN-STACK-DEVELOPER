// const useLocalStorage = (key, defaultValue) => {
//   // Add the state and effect here
// };

// export default useLocalStorage;

import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  console.log("Stored value:", storedValue); // Debugging

  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : defaultValue
  );

  useEffect(() => {
    console.log("Updating local storage:", value); // Debugging
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

