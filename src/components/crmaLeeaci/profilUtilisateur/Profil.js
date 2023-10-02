import Container from "react-bootstrap/Container"
import img from "../../../assets/media.jpg"
import "./profil.css"
import Tests from "../tests/Tests"

function Profil() {
    return(
        <section className="profil">
            <Container className="image">
                <img src={img} alt="user" className="mx-3"/>
                <p className="fs-3 fw-medium">
                    Charlot DEDJINOU
                </p>
            </Container>
            <Tests />
        </section>
    )
}

export default Profil