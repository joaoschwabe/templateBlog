import React from "react";
import DarkMode from "../DarkMode";
import "./styles.css";

const Header = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <h2>Meu blog</h2>
                <div>
                    <DarkMode className="darkmode"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
