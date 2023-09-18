import Header from "../header/Header"
import Footer from "../footer/Footer"
import Presentation from "../presentation/Presentation"
import Agenda from "../agenda/Agenda"
import Activities from "../activite/Activites"
import Media from "../media/Media"
import Eglise from "../eglise/Eglise"

function CommunautaireHome() {
    return(
        <>
            <Header />
            <Presentation />
            <Agenda />
            <Activities />
            <Media />
            <Eglise />
            <Footer />
        </>
    )
}

export default CommunautaireHome