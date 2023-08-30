import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import WhatsappIcon from "../../_icons/WhatsappIcon"
import "./meditation.css"

function Meditation() {

    const navigate = useNavigate()

    return(
        <>
            <section className="cmra-before-meditation">
                <Container className="d-flex flex-column justify-content-around align-items-center meditation">
                    <h2 className="text-center">Vous songez à étudier la bible ou la théologie à IEE-ACI ?</h2>
                    <p className="fs-6 text-justify"><i className="centreAcceuil" onClick={() => navigate('./centreAcceuil')}>Le centre d’accueil et le bureau d’admission des étudiants à IEE-ACI</i> peuvent vous aider à choisir le programme qui vous convient.</p>
                    <div className="buttons">
                        <button className="meditation-crmaLeeacibutton">Inscrivez vous</button>
                        <button className="meditation-crmaLeeacibutton">Connectez vous</button>
                        <p><WhatsappIcon /> Discutez maintenant</p>
                    </div>
                </Container>
            </section>
            <section className="cmra-meditation">
                    <div className="meditation">
                        <h3 className="text-center">Méditation des Ecritures</h3>
                        <p>
                            Désirez-vous la transformation de votre cœur et de votre esprit avec l’amour de Dieu, mais ne savez pas par où commencer ou quoi faire ? 
                            Loïse DAGBO (évangéliste), vous invite à expérimenter le rhèmatos du Saint-Esprit à travers la méditation biblique et pour constituer un réservoir des Paroles puissantes de Dieu dans votre âme.<u className="centreAcceuil" onClick={() => navigate('./meditation')}>+ Savoir plus</u>
                        </p>
                    </div>
            </section>
        </>
    )
}

export default Meditation