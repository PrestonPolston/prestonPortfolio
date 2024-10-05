import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import prestonImage from "../assets/image/prestonImage.webp";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container>
        <div className="navContainer">
          {/* <a className="prestonLogo" href="/">
            <img src={prestonImage} alt="Logo" />
          </a> */}
          <Nav className="navText">
            {/* <Nav.Link
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
            </Nav.Link> */}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
