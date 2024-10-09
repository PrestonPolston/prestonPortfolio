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
    <Navbar className={scrolled ? "scrolled" : "notScrolled"}>
      <Container>
        <div id="navContainer">
          <a className="prestonLogo" href="/">
            <img src={prestonImage} alt="Logo" />
          </a>
          <Nav id="navText">
            <Nav.Link
              href="#aboutMe"
              className={
                activeLink === "aboutMe" ? "activeNavBarLink" : "NavBarLink"
              }
              onClick={() => onUpdateActiveLink("aboutMe")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={
                activeLink === "portfolio" ? "activeNavBarLink" : "NavBarLink"
              }
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#workHistory"
              className={
                activeLink === "workHistory" ? "activeNavBarLink" : "NavBarLink"
              }
              onClick={() => onUpdateActiveLink("workHistory")}
            >
              Work History
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
