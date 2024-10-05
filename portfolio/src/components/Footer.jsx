import gitHub from "../assets/image/gitHub.png";
import linkedIn from "../assets/image/linkedIn.png";

const Footer = () => {
  return (
    <div id="footer">
      <div id="tags">
        <a
          className="tag"
          href={"https://github.com/PrestonPolston"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHub} alt="GitHub" />
        </a>
        <a
          className="tag"
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
