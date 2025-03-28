import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ imgSrc, title, technologies, githubLink, siteLink }) => {
  return (
    <div className="project">
      <img id="project-img" src={imgSrc} alt={`${title} Project`} />
      <div className="project-info">
        <h3 id="project-title">{title}</h3>
        <label>
          <span>Tecnologias utilizadas no projeto:</span>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech.logo}</li>
            ))}
          </ul>
        </label>
        <div id="buttons">
          <a
            className="project-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
            Repositório
          </a>
          {siteLink && (
            <a
              className="project-link"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="icon" />
              Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
