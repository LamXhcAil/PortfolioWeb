import React from "react";
import coverPic from "../images/CoverPic.png";
import "../styles/homePage.css";

const HomePage = () => {
  return (
    <>
      <div id="HomeImgContainer">
        <img src={coverPic} id="MyImg" alt="MyImg" />
        <h1 className="designer-h1">Designer</h1>
        <h1 className="programmer-h1">Programmer</h1>
      </div>
    </>
  );
};

export default HomePage;
