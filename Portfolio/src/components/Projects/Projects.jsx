import React, { useState } from "react";
import Select from "react-select";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

// img projects
import CasaLuz from "../../assets/CasaLuz.webp";
import Mademape from "../../assets/MademapeStore.webp";
import GreenSocial from "../../assets/GreenSocial.webp";
import AdivinheAPalavra from "../../assets/AdivinheAPalavra.webp";
import ListaDeTarefas from "../../assets/ListaDeTarefas.webp";
import CineReview from "../../assets/CineReview.webp";
import Accounts from "../../assets/accounts.webp";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiGithub,
  SiPython,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

const options = [
  { value: "C#", label: "C#" },
  { value: "Python", label: "Python" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
  { value: "Node.js", label: "Node.js" },
  { value: "MongoDB", label: "MongoDB" },
];

const projectsData = [
  {
    imgSrc: CasaLuz,
    title: "Projeto freelancer CasaLuz",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaReact />, name: "React" },
      { logo: <SiRedux />, name: "Redux" },
      { logo: <FaNodeJs />, name: "Node.js" },
      { logo: <SiMongodb />, name: "MongoDB" },
    ],
    githubLink: "https://github.com/GuiLigeskee/CasaLuz",
    siteLink: "https://www.casaluzimoveis.com",
  },
  {
    imgSrc: Mademape,
    title: "Projeto freelancer Mademape",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaReact />, name: "React" },
      { logo: <SiRedux />, name: "Redux" },
      { logo: <FaNodeJs />, name: "Node.js" },
      { logo: <SiMongodb />, name: "MongoDB" },
    ],
    githubLink: "https://github.com/GuiLigeskee/MademapeStore",
  },
  {
    imgSrc: GreenSocial,
    title: "Projeto pessoal GreenSocial",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaReact />, name: "React" },
      { logo: <SiRedux />, name: "Redux" },
      { logo: <FaNodeJs />, name: "Node.js" },
      { logo: <SiMongodb />, name: "MongoDB" },
    ],
    githubLink: "https://github.com/GuiLigeskee/MademapeStore",
  },
  {
    imgSrc: CineReview,
    title: "Projeto pessoal CineReview",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaReact />, name: "React" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Lista-de-tarefas",
    siteLink:
      "https://cinereview-guiligeskee-guiligeskees-projects.vercel.app/?_vercel_share=uFJrgDCVAsopRO1E20S1WKirpWFfiacu",
  },
  {
    imgSrc: ListaDeTarefas,
    title: "Projeto pessoal Lista de tarefas",
    technologies: [
      { logo: <SiTypescript />, name: "TypeScript" },
      { logo: <FaReact />, name: "React" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Lista-de-tarefas",
    siteLink:
      "https://lista-de-tarefas-l0femi5hw-guiligeskees-projects.vercel.app",
  },
  {
    imgSrc: AdivinheAPalavra,
    title: "Projeto pessoal Adivinhe a palavra",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaReact />, name: "React" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Adivinhe-a-palavra",
    siteLink: "https://GuiLigeskee.github.io/adivinhe-a-palavra",
  },
  {
    imgSrc: Accounts,
    title: "Projeto pessoal Accounts",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaNodeJs />, name: "Node.js" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Accounts-CLI",
  },
];

const Projects = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Filtragem dos projetos
  const filteredProjects =
    selectedLanguages.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedLanguages.every((lang) =>
            project.technologies.some((tech) => tech.name === lang.value)
          )
        );

  return (
    <>
      <h1 className="title">Principais projetos</h1>

      {/* Filtro */}
      <div className="filter-container">
        <Select
          options={options}
          isMulti
          onChange={setSelectedLanguages}
          placeholder="Filtrar por linguagens..."
          className="react-select-container"
          classNamePrefix="react-select"
          styles={{
            control: (provided, state) => ({
              ...provided,
              borderRadius: "15px",
              padding: ".5em",
              backgroundColor: "#0a0a0a",
              boxShadow: state.isFocused ? "0 0 0 1px #4a90e2" : "none",
              "&:hover": {
                borderColor: "#4a90e2",
              },
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "#0a0a0a",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? "#4a90e2" : "#3d3d3d",
              color: state.isFocused ? "#fff" : "#fff",
              "&:active": {
                backgroundColor: "#357abd",
              },
            }),
            multiValue: (provided) => ({
              ...provided,
              backgroundColor: "#4a90e2",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              color: "#fff",
            }),
            multiValueRemove: (provided) => ({
              ...provided,
              color: "#fff",
              "&:hover": {
                backgroundColor: "#357abd",
                color: "#fff",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "#fff",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#fff",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#b0b0b0",
            }),
          }}
        />
      </div>

      {/* Exibição dos projetos filtrados */}
      <div className="projects" id="projects">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              technologies={project.technologies}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
            />
          ))
        ) : (
          <p className="no-results">Nenhum projeto encontrado.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
