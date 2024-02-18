import React, { useContext } from "react";
import AppContext from "../appContext";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import SunLogo from "../images/SunLogo.png";
import MoonLogo from "../images/MoonLogo.png";

const Footer = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <footer id="footerContainer">
      <div>
        <Link to="/">Omer Cohen</Link>
      </div>
      <div className="FakeButtonsContainer">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
        }}
      >
        <img
          src={theme === "dark" ? SunLogo : MoonLogo}
          alt="Light/Dark mode switch"
          id="LightDarkLogo"
          onClick={() => {
            toggleTheme();
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
