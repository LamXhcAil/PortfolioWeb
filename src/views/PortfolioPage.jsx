import React, { useContext } from "react";
import AppContext from "../appContext";
import "../styles/portfolioPage.css";

const PortfolioPage = () => {
  const { portfolioWorks, onWorkSelected } = useContext(AppContext);
  return (
    <>
      <section id="worksContainer">
        {portfolioWorks.map((work, index) => (
          <div
            onClick={() => {
              onWorkSelected(work);
            }}
            className="workPreview"
            style={{
              backgroundImage: `url(${work.previewImg})`,
              backgroundSize: "cover",
            }}
            key={index}
          >
            <div className="workImg"></div>
            <div className="descriptionDev">
              <h4>{work.title}</h4>
              <p>{work.shortdes}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default PortfolioPage;
