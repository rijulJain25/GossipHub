import React from "react";
import useDarkMode from "use-dark-mode";

const lightTheme = "light-mode";
const darkTheme = "dark-mode";

export const useTheme = () => {
    const darkMode = useDarkMode();
    const [theme, setTheme] = React.useState(darkTheme);
    React.useEffect(() => {
      setTheme(darkMode?.value ? darkTheme : lightTheme);
    }, [darkMode.value]);
    return theme;
};