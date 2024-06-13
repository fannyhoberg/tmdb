import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface ThemeContextType {
  darkMode: boolean;
  changeTheme: () => void;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>("darkmode", false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
