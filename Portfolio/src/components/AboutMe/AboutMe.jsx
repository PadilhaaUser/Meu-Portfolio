import "./AboutMe.css";
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1 className="title">Sobre Mim</h1>
      <p className="text">
        Olá, meu nome é <span>Paulo Henrique Padilha</span>, sou um{" "}
        <span>desenvolvedor fullstack em formação</span> de <span>23 anos</span>
        . Atualmente, estou no 7º período de{" "}
        <span>Engenharia de Software </span>
        na UniBrasil e possuo experiência em diversas tecnologias, incluindo
        Python, C#, C, JavaScript, React Native, .NET Core, SQL, MongoDB, entre
        outros, desenvolvendo soluções eficientes tanto no front-end quanto no
        back-end.
      </p>

      <div className="timeline">
        <h2>Minha Jornada</h2>
        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Engenharia de Software</h3>
            <h4>UniBrasil (2022 - 2025)</h4>
          </div>
        </div>

        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Técnico em Transações Imobiliárias</h3>
            <h4>Escola Democrata (2021 - 2022)</h4>
          </div>
        </div>

        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Ensino Médio</h3>
            <h4>Curso e Colégio Acesso (2017 - 2019)</h4>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="icon" />
          <div className="timeline-content">
            <h3></h3>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
