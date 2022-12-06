import React, {createContext, useState} from "react";
import {theme} from "./theme.js";


export const GlobalContext = createContext(theme.light);


export const GlobalContext = () => {
    const [theme, setTheme] = useState;
    
}