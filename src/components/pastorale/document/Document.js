import { Container } from "react-bootstrap"
import { useState } from "react"
import reglement from './reglements.pdf'
import status from './status.pdf'
import "./document.css"

function Documents(){

    const [namedoc , setNamedoc] = useState(reglement)

    return(
        <section>
            <Container className="d-flex justify-content-between align-items-center documents">
                <div className="documentButton">
                    <button onClick={() => setNamedoc(status)}>Status Generaux CMG</button>
                    <button onClick={() => setNamedoc(reglement)}>REGLEMENT INTERIEUR CMG</button>
                </div>
                <div className="pdf">
                    <object
                        data={namedoc}
                        type="application/pdf"
                        width="100%"
                        height="600px"
                    >
                        <p>Votre navigateur ne supporte pas l'affichage de PDF..</p>
                    </object>
                </div>
            </Container>
        </section>
    )
}

export default Documents