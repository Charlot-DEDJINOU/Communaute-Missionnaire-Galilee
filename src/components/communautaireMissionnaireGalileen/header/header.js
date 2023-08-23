import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {

  const active = "text-white text-decoration-none fw-medium"
  const size = { fontSize: "1.3em" }

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "green" , minheight : "70px"}}>
      <Container>
        <Navbar.Brand className={active} style={size}>Communauté Missionnaire Galilée</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Item className="mx-3 my-2">
                <NavLink to="/" className={active} style={size}>Accueil</NavLink>
            </Nav.Item>
            <Nav.Item className="mx-3 my-2">
                <NavLink to="" className={active} style={size}>Nos Formations</NavLink>
            </Nav.Item>
            <Nav.Item className="mx-3 my-2">
                <NavLink to="" className={active} style={size}>Conseils Pasteurs</NavLink>
            </Nav.Item>
            <Nav.Item className="mx-3 my-2">
                <NavLink to="" className={active} style={size}>Nous rejoindre</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;