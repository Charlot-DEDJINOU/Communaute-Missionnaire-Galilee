import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"

function Header() {

  const drop = "text-black text-decoration-none fw-medium link"

  return(
        <>
          <Contact />
          <Navbar collapseOnSelect expand="lg" className="header-nav" style={{ minheight : "70px" , zIndex : "15"}}>
          <Container>
            <Navbar.Brand className='text-black fw-bold'>Communauté Missionnaire Galilée</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium">Agenda</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium">Activités</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium">Media</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium">Eglise</div>
                </Nav.Item>
              </Nav>
              <Nav>
                <Nav.Item className="mx-3 my-2">
                    <div className="item">MERCI POUR VOTRE OFFRANDE</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                    <div className="item">Culte en direct</div>
                </Nav.Item>
                <NavDropdown title="Menu" bsPrefix="item d-inline-block mx-3 my-2">
                    <NavDropdown.Item>
                        <NavLink to="/crmaLeeaci" className={drop}>Nos Formations</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/pastorale" className={drop}>Conseils Pasteur</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/joindre" className={drop}>Nous rejoindre</NavLink>
                      </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
  )
}

export default Header