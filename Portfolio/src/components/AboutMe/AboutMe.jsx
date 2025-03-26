import "./AboutMe.css";
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1 className="title">Sobre Mim</h1>
      <p className="text">
        Olá, sou <span>Guilherme Ligeski Saldanha</span>, um{" "}
        <span>desenvolvedor fullstack</span> de <span>20 anos</span>.
        Atualmente, estou no 6º período de <span>Engenharia de Software</span>
        na UniBrasil e tenho experiência no desenvolvimento de{" "}
        <span>APIs e sistemas escaláveis</span>, criando soluções personalizadas
        para empresas.
      </p>

      <div className="timeline">
        <h2>Minha Jornada</h2>
        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Engenharia de Software</h3>
            <p>UniBrasil (2022 - 2025)</p>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="icon" />
          <div className="timeline-content">
            <h3>Freelancer - Casa Luz Imóveis</h3>
            <p>
              Criação de site com catálogo de imóveis e painel administrativo.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="icon" />
          <div className="timeline-content">
            <h3>Freelancer - MadeMape Store</h3>
            <p>Plataforma de árvore de links com personalização de perfil.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
