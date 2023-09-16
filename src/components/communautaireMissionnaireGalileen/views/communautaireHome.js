import Header from "../header/Header"
import Footer from "../footer/Footer"
import Presentation from "../presentation/Presentation"
import Agenda from "../agenda/Agenda"
import Activities from "../activite/Activites"

function CommunautaireHome() {
    return(
        <>
            <Header />
            <Presentation />
            <Agenda />
            <Activities />
            <Footer />
        </>
    )
}

export default CommunautaireHome