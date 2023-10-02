import Container from "react-bootstrap/Container"
import CultureBiblique from "./CultureBiblique"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import "./tests.css"

function Tests() {

    const [show , setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container className="tests my-5">
            <div className="item mb-2">
                <span>Tests</span>
                <span>0/3</span>
            </div>
            <div className="item mb-2">
                <span>Culture Biblique</span>
                <button onClick={handleShow}>Commencer</button>
            </div>
            <div className="item mb-2">
                <span>Culture Générale</span>
                <button>Commencer</button>
            </div>
            <div className="item mb-2">
                <span>Niveau Français</span>
                <button>Commencer</button>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CultureBiblique />
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Tests