import image from "../../../assets/logo-inscription-en-ligne.png"
import "./inscription.css"
import {Container} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Inscription() {

    const navigate = useNavigate()

    return (
        <Container className="d-flex flex-column align-items-center inscription py-3">
            <img src={image} alt="inscription"/>
            <h3 className="text-center mb-3">Inscrivez-vous maintenant</h3>
            <p className="text-center mb-3">Commencez votre chemin pour devenir un étudiant de l’IEE-ACI.</p>
            <h2 className="text-center mb-3">REMPLISSEZ VOTRE DEMANDE</h2>
            <p className="text-justify mb-3">Si vous avez fait des recherches sur le programme de l’IEE-ACI qui vous intéresse, prié et consulté d’autres personnes à ce sujet, vérifié <i className="i">les conditions d’admission</i> et décidé que c’est le programme qui vous convient, alors vous êtes prêt pour l’étape suivante : soumettre votre candidature d’admission.</p>
            <div className="inscriptionbutton mb-3">
                <button onClick={() => navigate('/register')}>Demarrez votre admission</button>
                <button onClick={() => navigate('/login')}>Continuez votre admission</button>
            </div>
            <p className="text-justify mb-3">Si vous avez déjà été étudiant à l’IEE-ACI, mais que vous ne vous êtes pas inscrit depuis quatre trimestres ou plus, vous devrez faire une demande de <i className="i">réintégration ou de réadmission</i>.</p>
            <h2 className="text-justify mb-3">CHOSES À GARDER À L’ESPRIT</h2>
            <ul>
                <li className="text-justify fw-medium mb-3">Une fois que vous avez soumis votre demande d’admission en ligne, n’oubliez pas de vous reconnecter pour compléter les documents supplémentaires restants, y compris vos essais et vos échantillons d’écriture !</li>
                <li className="text-justify fw-medium mb-3">Vous devez remplir une demande d’aide financière distincte afin de recevoir des offres d’aide financière ou de bourses.</li>
                <li className="text-justify fw-medium mb-3">Si vous avez des questions pendant le processus de candidature, envoyez-nous un e-mail à <i className="i">crma.ieeaci@gmail.com</i>.</li>
            </ul>
        </Container>
    )
}

export default Inscription