import { Container } from "react-bootstrap"
import image from '../../../assets/image5.jpg'
import "./about.css"

function About() {
    return( 
        <Container className="my-5">
            <div className="crmaleeaci-about reverse mb-5">
                <img src={image} alt="alt" className="image-crmaleeaci-about"/>
                <div>
                    <p className="text-center fs-3 fw-bold" style={{color : "#00a300"}}>Racines dans le pur pentecôtisme, branches dans l’inculturation biblique</p>
                    <p style={{textAlign : "justify"}}>L’Institut Evangélique Education – Appui Conseil International est une institution pentecôtiste et multiconfessionnelle engagée à fournir une éducation de formation indispensable à divers chrétiens et dirigeants chrétiens du monde entier. Répondant aux changements dans l’église et le monde, l’IEE-ACI transforme l’expérience de l’institut pour créer une vraie communauté d’apprentissage mondiale où les disciples et dirigeants peuvent accéder aux programmes d’études de l’IEE-ACI, ainsi qu’à des cours non diplômants via la plateforme d’apprentissage numérique et des ressources gratuites créées par le service Média Presse. L’intégration distinctive de l’IEE-ACI de ses quatre principaux départements de manière unique, les disciples et dirigeants pour un service innovant, nuancé et intellectuellement fondé dans une variété de rôles et de contextes.</p>
                </div>
            </div>
            <div className="crmaleeaci-about mb-5">
                <div>
                    <p style={{textAlign : "justify"}}>L’IEEACI propose des programmes de Certificat Biblique pour les analphabètes au doctorat en missiologie (en partenariat et ou affiliation avec d’autres écoles accréditées), y compris des diplômes en Fongbé et en Yoruba , à un corps estudiantin diversifié provenant de divers pays et de différentes confessions. Nos anciens étudiants pour la plus part servent en tant que ministres, leaders, chercheurs, chantres etc. alors qu’ils influencent le changement et incarnent l’Évangile aux gens du monde entier.</p>
                </div>
                <img src={image} alt="alt" className="image-crmaleeaci-about image2"/>
            </div>
        </Container>
    )
}

export default About