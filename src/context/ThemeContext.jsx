import { createContext, useReducer } from "react";

import { LIGHT, DARK } from "../common/const";

const ThemeContext = createContext();
const initialTheme = LIGHT;

function reducer(state, action) {
  switch (action.type) {
    case LIGHT:
      return action.payload;
    case DARK:
      return action.payload;
    default:
      throw new Error();
  }
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useReducer(reducer, initialTheme);
  const data = { theme, setTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
export { ThemeProvider };