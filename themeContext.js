import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider
        value={{
          darkTheme,
          setDarkTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
