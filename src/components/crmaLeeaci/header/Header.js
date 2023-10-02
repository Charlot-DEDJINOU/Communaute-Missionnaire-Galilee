import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom"
import logo from "../../../assets/Logo.png"
import UserIcon from '../../_icons/UserIcon';

function Header() {

    const active = "link"
    const drop = "text-black text-decoration-none fw-medium link"
    const size = { fontSize: "1.3em"}

    return (
        <Navbar expand="lg" collapseOnSelect style={{ backgroundColor: "#d09800" , minHeight : "70px"}}>
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" height="50px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5"></Nav>
                    <Nav className="me-auto">
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/crmaLeeaci" className={active} style={size}>Acceuil</NavLink>
                        </Nav.Item>
                        <NavDropdown title="Formations" bsPrefix="link d-inline-block mx-3 my-2" style={size}>
                            <NavDropdown.Item>
                                <NavLink to="/formations/candidats" className={drop}>Candidats</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/formations/etudiantsActuels" className={drop}>Etudiants Actuels</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/formations/personnel" className={drop}>Personnel</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/formations/anciensEtudiants" className={drop}>Anciens Etudiants</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Autres" bsPrefix="link d-inline-block mx-3 my-2" style={size}>
                            <NavDropdown.Item>
                                <NavLink to="/centreAcceuil" className={drop} >Centre d'Accueil</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/academie" className={drop} >Academie</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/koineEquipement" className={drop} >Koïnè Equipement</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/mediaPresse" className={drop} >Média Presse</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/donateur" className={drop} >Donateur</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/admissions" className={active} style={size}>Admissions</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/apropos" className={active} style={size}>A propos</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/" className={active} style={size}>Home CMG</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/profil" className={active}><UserIcon /></NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;