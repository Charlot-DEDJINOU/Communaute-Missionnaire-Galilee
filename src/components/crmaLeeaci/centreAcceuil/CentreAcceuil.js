import { Container } from "react-bootstrap"
import image from '../../../assets/image5.jpg'
import Offre from "./Offre"
import "./centreacceuil.css"

function CentreAcceuil() {
    return(
        <Container className="my-5">
            <div className="centreAcceuil-about mb-5">
                <img src={image} alt="alt" className="image-centreAcceuil"/>
                <div>
                    <p className="text-center fs-3 fw-bold" style={{color : "#00a300"}}>Centre d’Accueil et Bureau d’Admission des Etudiants</p>
                    <p style={{textAlign : "justify"}}>Bienvenue à l’IEE-ACI ! Le Centre d’Accueil et Bureau d’Admission des Etudiants vous offre la possibilité de vous engager dans une formation équilibrée en Ministère Chrétien, Théologie biblique, Théologie Pentecôtiste, en leadership pastoral pratique et en missiologie. Nous pouvons vous donner les différentes orientations et possibilités qu’offrent nos divers programmes d’études biblique et théologiques dispensées par l’Institut Evangélique Education – Appui Conseil International. Vous trouverez ci-dessous des liens utiles ainsi que plusieurs façons de vous connecter avec quelqu’un de notre équipe pour en discuter davantage.</p>
                </div>
            </div>
            <div className="d-flex justify-content-around flex-wrap align-items-center">
                <Offre title = "Etes-vous un futur étudiant?" description = "Faites-nous confiance dans le choix du programme qui vous convient."/>
                <Offre title = "Etes-vous un étudiant actuel?" description = "Nous pouvons vous aider à explorer toutes les ressources à votre portée."/>
                <Offre title = "Etes-vous un ancien étudiant?" description = "Nous pouvons vous aider à garder la connexion avec votre centre."/>
            </div>
        </Container>
    )
}

export default CentreAcceuil