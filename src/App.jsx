import "./App.css";
import AppContext from "./appContext";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import PortfolioPage from "./views/PortfolioPage";
import ContactPage from "./views/ContactPage";
import Footer from "./components/Footer";
import WorkDetailsPage from "./views/WorkDetailsPage";
import gothicTownPic from "./images/previewImages/GothicTown.png";
import demonDagger from "./images/previewImages/DemonDagger.jpg";
import portfolioWebImg from "./images/previewImages/PortfolioWeb.png";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const portfolioWorks = [
    {
      title: "Gothic Town",
      type: "desgin",
      description: `In this project, I aimed to create an atmosphere of a dark, spooky, and deathly environment.
      I didn’t try to make it completely abandoned, but rather inhabited by a few miserable souls.
      While I tried to adhere as closely as possible to the concept arts, I also made some changes that I felt enhanced the scene.
      I thoroughly enjoyed working on this project, especially the challenge of combining two concept arts into one 3D scene.
      I created the entire scene myself, except for the Mannequin.
      Most of the models in the scene are low poly models that received projections from their high poly versions or were sculpted.
      I also did some basic rigging for the Crow and added a simple animation to bring the scene to life.
      While working on the project, I taught myself how to use Unreal Engine.
      It was my first time using Unreal Engine, and I really enjoyed the process.`,
      tools:
        "Autodesk 3ds Max · ZBrush · Unreal Engine · Substance Painter · Adobe Premiere Pro · Adobe Photoshop",
      shortdes: "3D Desgin",
      link: "https://omercohen1068.artstation.com/projects/4XR3ok",
      previewImg: gothicTownPic,
      images: "",
    },
    {
      title: "Demon Dagger",
      type: "desgin",
      description: `A low-poly model of a stylized fantasy dagger.
      This project showcases my skills in 3D modeling and texturing, bringing a fantastical concept to life with careful attention to detail.`,
      tools: "Autodesk 3ds Max · Autodesk Arnold · Substance Painter · ZBrush",
      shortdes: "3D Desgin",
      link: "https://omercohen1068.artstation.com/projects/5vVzqO",
      previewImg: demonDagger,
      images: "",
    },
    {
      title: "Portfolio Web",
      type: "programing",
      description:
        "This project involves the creation of a personal portfolio website, designed to showcase my skills, experiences, and projects as a Full Stack Developer and Game Designer. The website is being built with a focus on user experience, ensuring easy navigation and accessibility. It features sections for my projects, about me, and contact information. The project is a testament to my abilities in web development, design, and my attention to detail.",
      tools: "JavaScript · Cascading Style Sheets (CSS) · React.js · Node.js",
      shortdes: "Web Dev",
      link: "/",
      previewImg: portfolioWebImg,
      images: "",
    },
  ];

  const navigate = useNavigate();

  const onWorkSelected = (selectedWork) => {
    navigate(`/portfolio/${selectedWork.title}`);
  };

  const workByWorkTitle = (workTitle) => {
    const foundWork = portfolioWorks.find((work) => work.title === workTitle);
    {
      return foundWork;
    }
  };

  const contextValue = {
    portfolioWorks,
    onWorkSelected,
    theme,
    toggleTheme,
    workByWorkTitle,
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/portfolio/:selectedWork"
              element={<WorkDetailsPage />}
            />
          </Routes>
          <Footer />
        </>
      </AppContext.Provider>
    </>
  );
}

export default App;
