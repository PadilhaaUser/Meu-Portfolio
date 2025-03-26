import { Typewriter } from "react-simple-typewriter";
import "./Intro.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import cv from "../../assets/cv-paulo-padilha.pdf";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <h1 className="title">
          <Typewriter
            words={["Olá, eu sou o Paulo Padilha"]}
            loop={false}
            typeSpeed={100}
            deleteSpeed={75}
          />
        </h1>

        <h4 className="subtitle">Desenvolvedor Full Stack em formação</h4>
        <br />
        <p className="description">
          {" "}
          Possuo experiência em diversas tecnologias, incluindo Python, C#, C,
          JavaScript, React Native, .NET Core, SQL e MongoDB, desenvolvendo
          soluções eficientes tanto no front-end quanto no back-end.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn-primary">
            Meus Projetos
          </a>
          <a href={cv} download className="btn-secondary">
            <FaDownload /> Baixar CV
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/PadilhaaUser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/padilha-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
