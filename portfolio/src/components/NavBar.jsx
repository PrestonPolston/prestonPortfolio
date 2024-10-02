import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gitHub from "../assets/image/gitHub.png";
import linkedIn from "../assets/image/linkedIn.png";
import prestonImage from "../assets/image/prestonImage.webp";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <div className="navContainer">
          <Navbar.Brand href="#home">
            <img className="prestonLogo" src={prestonImage} alt="Logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navText">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "activeNavBarLink" : "NavBarLink"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#Skills"
                className={
                  activeLink === "Skills" ? "activeNavBarLink" : "NavBarLink"
                }
                onClick={() => onUpdateActiveLink("Skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#Projects"
                className={
                  activeLink === "Projects" ? "activeNavBarLink" : "NavBarLink"
                }
                onClick={() => onUpdateActiveLink("Projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            {/* <span className="navbar-text">
              <div className="socialIcon">
                <a href="https://github.com/PrestonPolston">
                  <img src={gitHub} alt="gitHub" />
                </a>
                <a href="https://www.linkedin.com/in/prestonpolston/">
                  <img src={linkedIn} alt="LinkedIn" />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("click")}>
                <span>Contact Me</span>
              </button>
            </span> */}
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
