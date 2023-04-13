import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import LinkedIn from "../img/linkedin.svg";
import TempPic from "../img/temp-pic.svg";
import GitHub from "../img/github.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    localStorage.setItem("activeTabIndex", value);
    setActiveLink(value);
  };

  useEffect(() => {
    const activeTabIndex = localStorage.getItem("activeTabIndex");
    setActiveLink(activeTabIndex);
  }, []);

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`${scrolled ? "scrolled" : ""} ${
        activeLink === "" ? "mainPage" : ""
      } `}
    >
      <Container>
        <Navbar.Brand href="/" onClick={() => onUpdateActiveLink("")}>
          <Image src={TempPic} alt="Profile Pic" width={36} height={36} />
          Tristan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="/profile"
              className={`navbar-link ${
                activeLink === "profile" && "activeLink"
              }`}
              onClick={() => onUpdateActiveLink("profile")}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              href="/projects"
              className={`navbar-link ${
                activeLink === "projects" && "activeLink"
              }`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={`navbar-link ${
                activeLink === "contact" && "activeLink"
              }`}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Me
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/tristan-bacolod-981174160/">
              <Image
                src={LinkedIn}
                alt="LinkedIn Link"
                width={36}
                height={36}
              />
            </Nav.Link>
            <Nav.Link href="https://github.com/TristanBac1">
              <Image src={GitHub} alt="Github Link" width={36} height={36} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
