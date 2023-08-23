import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "rgb(6, 198, 6)"}}>
      <Container>
        <Navbar.Brand href="#home">Communauté Missionnaire Galilée</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Item>
                <NavLink to="/">ACCUEIL</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="">NOS FORMATIONS</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="">CONSEILS PASTEURS</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="">Dank memes</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;