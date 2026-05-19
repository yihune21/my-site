import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleDark: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("mint-theme");
    return stored ? stored === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mint-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
