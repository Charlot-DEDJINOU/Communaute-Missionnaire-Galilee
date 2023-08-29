import { useParams } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Tresorier from "../rapports/Tresorier"
import Secretaire from "../rapports/Secretaire"
import PasteurDistrict from "../rapports/PasteurDistrict"
import PasteurCommunaute from "../rapports/PasteurCommunaute"
import Eveque from "../rapports/Eveque"
import EvequeAdjoint from "../rapports/EvequeAdjoint"
import Departement  from "../rapports/Departement"

function PastoraleRapport() {
    
    const { type } = useParams()

    return(
        <>
            <Header />
            {type === "tresorier" && <Tresorier /> }
            {type === "secretaire" && <Secretaire />}
            {type === "departement" && <Departement /> }
            {type === "pasteurCommunaute" && <PasteurCommunaute />}
            {type === "pasteurdistrict" && <PasteurDistrict /> }
            {type === "eveque" && <Eveque />}
            {type === "evequeAdjoint" && <EvequeAdjoint />}
            <Footer />
        </>
    )
}

export default PastoraleRapport