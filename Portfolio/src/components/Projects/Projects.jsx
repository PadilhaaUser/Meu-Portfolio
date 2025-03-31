import React, { useState } from "react";
import Select from "react-select";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

// img projects
import AlphapImoveis from "../../assets/img/AlphapImoveis.webp";
import NewFlix1 from "../../assets/img/NewFlix1.webp";
import NewFlix2 from "../../assets/img/NewFlix2.webp";
import JogoMemoria from "../../assets/img/JogoMemoria.webp";
import projetoCRUD from "../../assets/img/CRUD.webp";
import SnakeGame from "../../assets/img/SnakeGame.webp";
import Calculador from "../../assets/img/Calculador.webp";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
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
  SiCplusplus,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";

const options = [
  { value: "C#", label: "C#" },
  { value: "Python", label: "Python" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "C++", label: "C++" },
  { value: "React", label: "React" },
  { value: "HTML", label: "HTML" },
  { value: "Node.js", label: "Node.js" },
  { value: "MongoDB", label: "MongoDB" },
];

const projectsData = [
  {
    imgSrc: AlphapImoveis,
    title: "Projeto freelancer AlphapImoveis",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaHtml5 />, name: "HTML" },
      { logo: <FaCss3Alt />, name: "CSS" },
    ],
    githubLink: "https://github.com/PadilhaaUser/Alphap-imoveis_LandingPage",
    siteLink: "https://alphapimoveis.netlify.app",
  },
  {
    imgSrc: NewFlix1,
    title: "Projeto pessoal NewFlix v1",
    technologies: [
      { logo: <FaHtml5 />, name: "HTML" },
      { logo: <FaCss3Alt />, name: "CSS" },
    ],
    githubLink: "https://github.com/PadilhaaUser/Projeto-Streaming-v1.0",
    siteLink: "https://padilhaauser.github.io/Projeto-Streaming-v1.0/",
  },
  {
    imgSrc: NewFlix2,
    title: "Projeto pessoal NewFlix v2",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaHtml5 />, name: "HTML" },
      { logo: <FaCss3Alt />, name: "CSS" },
    ],
    githubLink: "https://github.com/PadilhaaUser/Projeto-Streaming-v2.0",
    siteLink: "https://padilhaauser.github.io/Projeto-Streaming-v2.0/",
  },
  {
    imgSrc: JogoMemoria,
    title: "Projeto pessoal Jogo da Memoria",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaHtml5 />, name: "HTML" },
      { logo: <FaCss3Alt />, name: "CSS" },
    ],
    githubLink: "https://github.com/PadilhaaUser/JogoDaMemoria-HtmlCssJS",
    siteLink: "https://padilhaauser.github.io/JogoDaMemoria-HtmlCssJS/",
  },
  {
    imgSrc: projetoCRUD,
    title: "Projeto pessoal CRUD",
    technologies: [
      { logo: <SiJavascript />, name: "JavaScript" },
      { logo: <FaHtml5 />, name: "HTML" },
      { logo: <FaCss3Alt />, name: "CSS" },
    ],
    githubLink: "https://github.com/PadilhaaUser/CRUD",
    siteLink: "https://padilhaauser.github.io/CRUD/",
  },
  {
    imgSrc: SnakeGame,
    title: "Projeto pessoal do Jogo da Cobrinha",
    technologies: [{ logo: <SiCplusplus />, name: "C++" }],
    githubLink: "https://github.com/PadilhaaUser/jogo-cobrinha",
  },

  {
    imgSrc: Calculador,
    title: "Projeto pessoal de um calculador de dígitos verificadores",
    technologies: [
      { logo: <SiPython />, name: "Python" },
      { logo: <TbBrandCSharp />, name: "C#" },
    ],
    githubLink:
      "https://github.com/PadilhaaUser/Projeto-de-Programacao-Orientada-a-Objetos",
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
              backgroundColor: "#000000",
              boxShadow: state.isFocused ? "0 0 0 1px #ffe4c4" : "none",
              "&:hover": {
                borderColor: "#f9f943",
              },
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "#000000",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? "#695236" : "#887660",
              color: state.isFocused ? "#f9f943" : "#f9f943",
              "&:active": {
                backgroundColor: "#357abd",
              },
            }),
            multiValue: (provided) => ({
              ...provided,
              backgroundColor: "#ffe4c4",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              color: "#887660",
            }),
            multiValueRemove: (provided) => ({
              ...provided,
              color: "#887660",
              "&:hover": {
                backgroundColor: "#f9f943",
                color: "#887660",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "#ffe4c4",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#fff",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#ffe4c4",
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
