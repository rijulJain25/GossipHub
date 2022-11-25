import React from "react";
import useDarkMode from "use-dark-mode";
import { useTheme } from "/Users/rijuljain/Documents/photos/Web Development/react-social-media/client/src/components/UseTheme/useTheme.js";
import Moon from "../../assets/moon.png"
import Sun from "../../assets/sun.png"
import "./ThemeBtn.scss"

const ThemeBtn = () => {
    const darkMode = useDarkMode(true);

    const theme = useTheme();

    return (
      <div>
        <img src={darkMode?.value ? Sun : Moon} className="btn-theme" type="button" onClick={darkMode.toggle} />
      </div>
    ); 
};

export default ThemeBtn;