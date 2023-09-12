import WhatsappIcon from "../../_icons/WhatsappIcon"
import TwitterIcon from '../../_icons/TwitterIcon'
import FacebookIcon from "../../_icons/FacebookIcon"
import InstagramIcon from "../../_icons/InstagramIcon"
import YoutubeIcon from "../../_icons/YoutubeIcon"
import CameraIcon from "../../_icons/CameraIcon"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"

function Header() {

  const drop = "text-black text-decoration-none fw-medium link"

  return(
    <header className="header-communautaire">
        <div className="header-contact">
          <b></b>
          <b>CONTACT I Cliquez ici pour contacter l'église</b>
          <div className="icone">
              <FacebookIcon/>
              <InstagramIcon />
              <TwitterIcon />
              <WhatsappIcon />
              <YoutubeIcon />
          </div>
        </div>
        <Navbar collapseOnSelect expand="lg" className="header-nav" style={{ minheight : "70px"}}>
          <Container>
            <Navbar.Brand className='text-black fw-bold'>Communauté Missionnaire Galilée</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Item className="mx-3 my-2">
                    <div className="item">MERCI POUR VOTRE OFFRANDE</div>
                </Nav.Item>
                <Nav.Item className="mx-3 my-2">
                    <div className="item">Culte en direct</div>
                </Nav.Item>
                <NavDropdown title="Menu" bsPrefix="item d-inline-block mx-3 my-2">
                    <NavDropdown.Item>
                        <NavLink to="/rapports/secretaire" className={drop}>R Secrétaire</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/rapports/tresorier" className={drop}>R Trésorier</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/rapports/departement" className={drop}>R Départements</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/rapports/pasteurCommunaute" className={drop}>R Pasteur Communauté</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/rapports/pasteurdistrict" className={drop}>R Pasteur District</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/rapports/evequeAdjoint" className={drop}>R Evêque-adjoint</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to="/rapports/eveque" className={drop}>R Evêque</NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header