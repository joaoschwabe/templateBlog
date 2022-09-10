import { useEffect, useState } from "react";

import "./styles.css";

const DarkMode = () => {
    const [temaSwitch, setTemaSwitch] = useState();

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
            setTemaSwitch(theme);
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme
            setTemaSwitch(theme);
        }
    };
    useEffect(() => {
        if (localStorage) {
            setTemaSwitch(localStorage.getItem("theme"));
        }
    }, []);

    return (
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
        >
            Mudar para tema {temaSwitch !== "dark" ? "Escuro" : "Claro"}
        </button>
    );
};

export default DarkMode;
