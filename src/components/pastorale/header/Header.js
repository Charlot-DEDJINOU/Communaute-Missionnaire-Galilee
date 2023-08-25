import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom"

function Header() {

    const active = "text-white text-decoration-none fw-medium link"
    const drop = "text-black text-decoration-none fw-medium link"
    const size = { fontSize: "1.3em" , color : "white" }

    return (
        <Navbar expand="lg" collapseOnSelect style={{ backgroundColor: "green" , minHeight : "70px"}}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/pastorale" className={active} style={size}>Acceuil</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/" className={active} style={size}>Documents</NavLink>
                        </Nav.Item>
                        <NavDropdown title="Vos Rapports" id="basic-nav-dropdown" className="mx-3 my-0" style={size}>
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
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/pastorale/contact" className={active} style={size}>Contact</NavLink>
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