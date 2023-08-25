import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom"

function Header() {

    const active = "text-white text-decoration-none fw-medium link"
    const size = { fontSize: "1.3em" , color : "white" }

    return (
        <Navbar expand="lg" collapseOnSelect style={{ backgroundColor: "green" , minheight : "70px"}}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/" className={active} style={size}>Acceuil</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/Products" className={active} style={size}>Documents</NavLink>
                        </Nav.Item>
                        <NavDropdown title="Vos Rapports" id="basic-nav-dropdown" className="mx-3 my-0" style={size}>
                            <NavDropdown.Item href="#action/3.1">R Secrétaire</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">R Trésorier</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">R Départements</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">R Pasteur Communauté</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">R Pasteur District</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">R Evêque-adjoint</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">R Evêque</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/Contact" className={active} style={size}>Contact</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/" className={active} style={size}>Home CMG</NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;