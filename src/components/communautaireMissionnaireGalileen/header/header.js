import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from './Contact';
import { NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"

function Header() {

  const drop = "text-black text-decoration-none fw-medium link"

  const handleClick = (sectionID) => {
    
    const sectionElement = document.getElementById(sectionID) ;

    if (sectionElement) {

      const rect = sectionElement.getBoundingClientRect();
      const scrollPosition = rect.top + window.scrollY - 120;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

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
                  <div className="fw-medium" onClick={() => handleClick("agenda")}>Agenda</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium" onClick={() => handleClick("activite")}>Activités</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium" onClick={() => handleClick("media")}>Media</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                  <div className="fw-medium" onClick={() => handleClick("eglise")}>Eglise</div>
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