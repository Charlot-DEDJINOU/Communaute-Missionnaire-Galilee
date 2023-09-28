import Container from "react-bootstrap/Container"
import "./agenda.css"
import { useState } from "react"
import Item from "./Item"
import item1 from "../../../assets/bapteme1.jpg"
import { useNavigate } from "react-router-dom"

function Agenda() {

    const [show , setShow] = useState(false)

    const data = [
        {
            "id" : 1 ,
            "titre" : "Première convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Abomey Calavi"
        },
        {
            "id" : 2 ,
            "titre" : "Première convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Abomey Calavi"
        },
        {
            "id" : 3 ,
            "titre" : "Première convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Abomey Calavi"
        }
    ]

    const navigate = useNavigate()

    return(
        <section className="agenda-section" id="agenda">
            <Container>
                <div className="d-flex justify-content-between align-content-center mb-3 titre">
                    <h2>Agenda</h2>
                    <button className="btn btn-primary" onClick={() => navigate("/evenements")} style={{backgroundColor :  "black" , border : "none"}}>Voir agenda</button>
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
                       <div>
                            <h3 className="text-center mb-3">Evenement prochain</h3>
                            {
                                data.map(item => <Item {...item} key={item.id} />)
                            }
                       </div>
                        <button onClick={() => navigate("/evenementsFutur")} >Voir plus</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Agenda