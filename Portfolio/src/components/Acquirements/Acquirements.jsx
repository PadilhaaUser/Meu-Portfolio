import "./Acquirements.css";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
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
  SiAdobephotoshop,
  SiCanva,
  SiWireshark,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

const skills = [
  {
    category: "Linguagens",
    icon: <FaCode />,
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C++", icon: <i class="devicon-cplusplus-plain"></i> },
      { name: "C#", icon: <i class="devicon-csharp-plain"></i> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    category: "Frontend",
    icon: <FaReact />,
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <i class="devicon-html5-plain"></i> },
      { name: "CSS", icon: <i class="devicon-css3-plain"></i> },
      { name: "Bootstrap", icon: <i class="devicon-bootstrap-plain"></i> },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer />,
    technologies: [
      { name: ".NET", icon: <SiDotnet /> },
      { name: "Django", icon: <i class="devicon-django-plain"></i> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "php", icon: <i class="devicon-php-plain"></i> },
    ],
  },
  {
    category: "Banco de Dados",
    icon: <FaDatabase />,
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <i class="devicon-sqlite-plain"></i> },
    ],
  },
  {
    category: "DevOps",
    icon: <FaTools />,
    technologies: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Azure", icon: <i class="devicon-azure-plain"></i> },
      { name: "Azure DevOps", icon: <i class="devicon-azuredevops-plain"></i> },
    ],
  },
  {
    category: "Ferramentas",
    icon: <FaTools />,
    technologies: [
      { name: "Git", icon: <BsGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Wireshark", icon: <SiWireshark /> },
    ],
  },
  {
    category: "Microsoft Office",
    icon: <TbBrandOffice />,
    technologies: [
      { name: "Word", icon: <FaFileWord /> },
      { name: "Powerpoint", icon: <FaFilePowerpoint /> },
      { name: "Excel", icon: <FaFileExcel /> },
    ],
  },
  {
    category: "Design",
    icon: <MdDesignServices />,
    technologies: [
      { name: "Figma", icon: <i class="devicon-figma-plain"></i> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Canva", icon: <SiCanva /> },
    ],
  },
];

const Acquirements = () => {
  return (
    <div className="acquirements" id="acquirements">
      <h1 className="title">Conhecimentos</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h2>
              {skill.icon} {skill.category}
            </h2>
            <div className="skill-grid">
              {skill.technologies.map((tech, i) => (
                <div key={i} className="skill-item">
                  <span className="icon">{tech.icon}</span>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acquirements;
