import Header from "../header/Header"
import Footer from "../footer/Footer"
import Presentation from "../presentation/Presentation"
import Agenda from "../agenda/Agenda"
import Activities from "../activite/Activites"
import Media from "../media/Media"

function CommunautaireHome() {
    return(
        <>
            <Header />
            <Presentation />
            <Agenda />
            <Activities />
            <Media />
            <Footer />
        </>
    )
}

export default CommunautaireHome