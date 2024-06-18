import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Can't use ThemeContext");
  }
  return themeContext;
};

export default useTheme;
