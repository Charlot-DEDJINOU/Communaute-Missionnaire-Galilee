import { useParams } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Tresorier from "../rapports/Tresorier"
import Secretaire from "../rapports/Secretaire"

function Rapport() {
    
    const { type } = useParams()

    return(
        <>
            <Header />
            {type === "tresorier" && <Tresorier /> }
            {type === "secretaire" && <Secretaire />}
            <Footer />
        </>
    )
}

export default Rapport