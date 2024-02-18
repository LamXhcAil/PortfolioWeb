import React from "react";
import coverPic from "../images/CoverPic.png";
import "../styles/aboutPage.css";

const AboutPage = () => {
  return (
    <div id="AboutImgContainer">
      <img src={coverPic} id="MyImg" alt="MyImg" />
      <h1 className="image-h1">About</h1>
      <h3 className="image-h3">
        Full Stack Developer | Game Designer & Developer
      </h3>
      <p className="image-p">
        Full Stack Developer who loves to dive deep into the world of game
        development and design. I’m pretty handy with a bunch of frameworks and
        design tools, but that’s not all! When I’m not coding or designing,
        you’ll find me pushing my limits in powerlifting. I’m a firm believer in
        a healthy lifestyle and love working in teams - the more the merrier!
        Always up for learning new things and stepping out of my comfort zone.
      </p>
    </div>
  );
};

export default AboutPage;
