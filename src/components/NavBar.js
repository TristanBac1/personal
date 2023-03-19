import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
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
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" onClick={() => onUpdateActiveLink("")}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
