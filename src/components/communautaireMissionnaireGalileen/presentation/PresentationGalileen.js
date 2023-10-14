import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import media from "../../../assets/media.jpg"
import culte from "../../../assets/culte.jpg"
import conference from "../../../assets/conference.jpg"
import "./presentation.css"
import { useNavigate } from "react-router-dom"

function Presentation() {

    const navigate = useNavigate()

    return(
       <section className="presentation-communautaire ">
            <Container className="presentation-container">
                <h1 className="mb-3">
                    Bienvenue au <span>Coeur </span> de l'église !
                </h1>
                <div className="carousel-communautaire">
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <div  style={{ backgroundImage: `url(${media})` }} className="iteme">
                                    <div className="m-4 text-white">
                                        <p>Cultes , emissions , series</p>
                                    <h4>Decouvrir tous les medias</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div  style={{ backgroundImage: `url(${conference})` }} className="iteme" onClick={() => navigate("/evenementsFutur")}>
                                <div className="m-4 text-white">
                                    <p>Cultes , emissions , series</p>
                                    <h4>Decouvrir tous les evenements à venir</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div  style={{ backgroundImage: `url(${culte})` }} className="iteme">
                                    <div className="m-4 text-white">
                                    <p>Cultes , emissions , series</p>
                                    <h4>Suivre tout nos anciens cultes</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
       </section>
    )
}

export default Presentation