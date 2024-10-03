import gitHub from "../assets/image/gitHub.png";
import linkedIn from "../assets/image/linkedIn.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="tags">
        <a
          href={"https://github.com/PrestonPolston"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/prestonpolston/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
