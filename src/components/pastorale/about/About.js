import image from "../../../assets/LOGO-CONSEIL-NATIONAL-PASTEURS-CMG.jpg"
import Container from 'react-bootstrap/Container';
import "./about.css"
import Button from "react-bootstrap/Button";

function About() {
    return(
        <section className="about-pastoral mt-5">
            <Container className="about">
                    <img src={image} alt="alt" className="image-about"/>
                    <div>
                        <p className="text-center fs-3 fw-bold" style={{color : "green"}}>Notre Objectif</p>
                        <p className="">Bienvenu au Conseil International des Pasteurs de la Communauté Missionnaire Galilée. Pasteurs (apôtre, prophète, évangéliste, pasteur, docteur) et collaborateurs du pasteur (secrétaire, trésorier, diacre, ancien , pasteur laïc), c’est votre page officielle pour toutes vos activités, pastorales et rapports d’activités. Revenez chaque fois consulter les nouvelles et actualités pastorales.</p>
                        <Button style={{backgroundColor : "green" , border : "none"}}>Contactez nous</Button>
                    </div>
            </Container>
        </section>
    )
}

export default About