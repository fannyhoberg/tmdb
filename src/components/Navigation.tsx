import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Navigation = () => {
  const { darkMode, changeTheme } = useTheme();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          🎞 TMDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} end to="/now-playing">
              Now playing
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/trending">
              Trending
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/top-rated">
              Top rated
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/genres">
              Genres
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-secondary" onClick={changeTheme}>
          {darkMode ? "🌝" : "🌚"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigation;
