import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import prestonImage from "../assets/image/prestonImage.webp";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <div id="navContainer">
          <a className="prestonLogo" href="/">
            <img src={prestonImage} alt="Logo" />
          </a>
          <Nav id="navText">
            <Link to="aboutMe" spy={true} smooth={true} duration={500}>
              About Me
            </Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              Portfolio
            </Link>
            <Link to="workHistory" spy={true} smooth={true} duration={500}>
              Work History
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
