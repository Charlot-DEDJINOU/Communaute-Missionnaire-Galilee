import { Container } from "react-bootstrap"
import Evenement from "./Evenement"

function Evenements() {
    return(
        <section className="evenements">
            <Container className="d-flex justify-content-around flex-wrap">
                <Evenement />
                <Evenement />
                <Evenement />
            </Container>
        </section>
    )
}

export default Evenements