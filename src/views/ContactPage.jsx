import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../appContext";
import "../styles/contactPage.css";
import coverPic from "../images/CoverPic.png";
import LinkedinLogo from "../images/LinkedinLogo.png";
import ArtStationLogo from "../images/ArtStationLogo.png";

const ContactPage = () => {
  const {} = useContext(AppContext);
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
    topic: "",
  });

  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [topicError, setTopicError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const onSend = (fullMail) => {
    if (fullMail.name === "") {
      setFullNameError(true);
    } else {
      setFullNameError(false);
    }

    if (!fullMail.email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (fullMail.message === "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if (fullMail.topic === "") {
      setTopicError(true);
    } else {
      setTopicError(false);
    }
  };

  return (
    <>
      <div id="ContactImgContainer">
        <img src={coverPic} id="MyImg" alt="MyImg" />
        <h1 className="image-h1">Contact</h1>
        <h3 className="image-h3">
          Feel free to contact me through email or social platforms!
        </h3>
        <div className="socialPlat">
          <Link
            to="https://www.linkedin.com/in/omer-cohen-107302217/"
            title="Connect with me on Linkedin"
          >
            <img src={LinkedinLogo} className="SocialLogo" alt="LinkedinLogo" />
          </Link>
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
        </div>
      </div>
      <h2 id="mainH2">Send me an email</h2>
      <div id="mainDiv">
        <div className="inputsContainer">
          <p className="inputsDisc">Your name:</p>
          <input
            onChange={(e) => {
              setMail((prevState) => ({ ...prevState, name: e.target.value }));
            }}
            type="text"
          />
          {fullNameError ? (
            <p style={{ color: "red" }}>Full name cannot be empty.</p>
          ) : null}
        </div>

        <div className="inputsContainer">
          <p className="inputsDisc">Email address:</p>
          <input
            onChange={(e) => {
              setMail((prevState) => ({ ...prevState, email: e.target.value }));
            }}
            type="text"
          />
          {emailError ? (
            <p style={{ color: "red" }}>Email must contain '@'.</p>
          ) : null}
        </div>

        <div
          className="inputsContainer"
          style={{ gridColumn: "span 2", width: "200px", margin: "auto" }}
        >
          <p className="inputsDisc">Subject:</p>
          <select
            onChange={(e) => {
              setMail((prevState) => ({ ...prevState, topic: e.target.value }));
            }}
          >
            <option value="">Select Category</option>
            <option value="General Question">General Question</option>
            <option value="3D Job Request">3D job Request</option>
            <option value="Game Development Request">
              Game Development Request
            </option>
            <option value="Game Design Request">Game Design Request</option>
            <option value="Web Development Request">
              Web Development Request
            </option>
          </select>
          {topicError ? <p style={{ color: "red" }}>Choose topic.</p> : null}
        </div>

        <div className="inputsContainer" style={{ gridColumn: "span 2" }}>
          <p className="inputsDisc">Message:</p>
          <textarea
            id="messageInput"
            onChange={(e) => {
              setMail((prevState) => ({
                ...prevState,
                message: e.target.value,
              }));
            }}
            type="text"
          />
          {messageError ? (
            <p style={{ color: "red" }}>Can't send an empty message.</p>
          ) : null}
        </div>

        <div className="buttonContainer">
          <button
            onClick={() => {
              onSend(mail);
            }}
          >
            Send email
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
