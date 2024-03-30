 import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}  {details.link? 
          <> -  <a target="_blank" href={details.link} className="demo">Live Demo</a></>
          :""
      }</h6>

      <div className="tags">
          {details.tags.map((item) => (
            <p className="gfc" key={item}>{item}</p>
          ))}
      </div>
      <ul className="resp-list">
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
