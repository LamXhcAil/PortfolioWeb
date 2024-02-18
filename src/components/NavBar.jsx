import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../appContext";
import ClickableLogo from "../images/ClickableLogo.png";
import ArtStationLogo from "../images/ArtStationLogo.png";
import LinkedinLogo from "../images/LinkedinLogo.png";
import "../styles/navBar.css";

const NavBar = () => {
  const {} = useContext(AppContext);
  return (
    <nav id="NavBarContainer">
      <Link to="/">
        <img src={ClickableLogo} className="MyLogo" alt="MyLogo" />
      </Link>
      <div id="FakeButtonsContainer">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div id="SocialContainer">
        <Link
          to="https://www.artstation.com/omercohen1068"
          title="Follow me on ArtStation"
        >
          <img
            src={ArtStationLogo}
            className="SocialLogo"
            alt="ArtStationLogo"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/omer-cohen-107302217/"
          title="Connect with me on Linkedin"
        >
          <img src={LinkedinLogo} className="SocialLogo" alt="LinkedinLogo" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
