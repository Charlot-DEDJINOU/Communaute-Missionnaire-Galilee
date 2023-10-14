import Header from "../header/HeaderGalileen"
import Footer from "../footer/FooterGalileen"
import Presentation from "../presentation/Presentation"
import Agenda from "../agenda/Agenda"
import Activities from "../activite/Activites"
import Media from "../media/Media"
import SectionEglise from "../eglise/SectionEglise"

function CommunautaireHome() {
    return(
        <>
            <Header />
            <Presentation />
            <Agenda />
            <Activities />
            <Media />
            <SectionEglise />
            <Footer />
        </>
    )
}

export default CommunautaireHome