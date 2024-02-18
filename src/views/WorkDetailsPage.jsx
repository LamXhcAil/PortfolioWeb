import React, { useContext } from "react";
import AppContext from "../appContext";
import { Link, useParams } from "react-router-dom";

const WorkDetailsPage = () => {
  const { workByWorkTitle } = useContext(AppContext);
  const { selectedWork } = useParams();
  const work = workByWorkTitle(selectedWork);

  return (
    <>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
      <img style={{ width: "50%" }} src={work.previewImg} alt="previewImg" />
      <div>
        <Link to={`${work.link}`}>View Full Project</Link>
      </div>
      <p>
        <span style={{ fontWeight: "bold" }}>Tools:</span> {work.tools}
      </p>
    </>
  );
};

export default WorkDetailsPage;
