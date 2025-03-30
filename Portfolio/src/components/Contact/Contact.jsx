import "./Contact.css";

// icons
import Whatsapp from "../../assets/whatsapp.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Entre em contato!</h2>
      <div className="card">
        <a
          className="social-link1"
          href="https://www.instagram.com/opaulopadilha/"
          target="_blank"
        >
          <img src={Instagram} alt="" />
        </a>
        <a
          className="social-link2"
          href="https://www.linkedin.com/in/padilha-dev/"
          target="_blank"
        >
          <img src={Linkedin} alt="" srcSet="" />
        </a>
        <a
          className="social-link3"
          href="https://github.com/PadilhaaUser"
          target="_blank"
        >
          <img src={Github} alt="" />
        </a>
        <a
          className="social-link4"
          href="https://wa.me/5541984840223"
          target="_blank"
        >
          <img src={Whatsapp} alt="" />
        </a>
      </div>
      <p className="copy">Feito por Paulo Padilha &copy; 2025</p>
    </div>
  );
};

export default Contact;
