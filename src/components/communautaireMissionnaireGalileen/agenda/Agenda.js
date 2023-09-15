import Container from "react-bootstrap/Container"
import item1 from "../../../assets/bapteme1.jpg"
import "./agenda.css"
import { useState } from "react"

function Agenda() {

    const [show , setShow] = useState(false)

    return(
        <section className="agenda-section">
            <Container>
                <div className="d-flex justify-content-between align-content-center mb-3 titre">
                    <h2>Agenda</h2>
                    <button className="btn btn-primary" style={{backgroundColor :  "black" , border : "none"}}>Voir agenda</button>
                </div>
                <div className="after-titre">
                    <div  style={{ backgroundImage: `url(${item1})` }} className="item" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                        <div className="m-4 text-white">
                            <p>Cultes , emissions , series</p>
                            <h4>Decouvrir tous les medias</h4>
                            {show && <p>L’église de la Porte Ouverte Chrétienne connaît un dynamisme qui se déploie dans pas moins de 18 pôles de service qui regroupent 150 activités différentes ! Cette journée est dédiée […]</p>}
                        </div>
                    </div>
                    <div className="evenement-futur">
                        <div className="item-evenement my-2">
                            <img src={item1} alt="evenement" />
                            <div>
                                <span className="date">Ven 08 Septembre</span>
                                <span className="name">Charlot DEDJINOU</span>
                                <span className="status">En présentiel</span>
                            </div>
                        </div>
                        <div className="item-evenement my-2">
                            <img src={item1} alt="evenement" />
                            <div>
                                <span className="date">Ven 08 Septembre</span>
                                <span className="name">Charlot DEDJINOU</span>
                                <span className="status">En présentiel</span>
                            </div>
                        </div>
                        <div className="item-evenement my-2">
                            <img src={item1} alt="evenement" />
                            <div>
                                <span className="date">Ven 08 Septembre</span>
                                <span className="name">Charlot DEDJINOU</span>
                                <span className="status">En présentiel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Agenda