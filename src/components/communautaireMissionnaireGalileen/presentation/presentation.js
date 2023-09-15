import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import item from "../../../assets/bapteme1.jpg"
import item1 from "../../../assets/bapteme2.jpg"
import "./presentation.css"

function Presentation() {
    return(
       <section className="presentation-communautaire mb-5">
            <Container className="presentation-container">
                <h1 className="mb-3">
                    Bienvenue au <span>Coeur </span> de l'église !
                </h1>
                <div className="carousel-communautaire">
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <div  style={{ backgroundImage: `url(${item1})` }} className="iteme">
                                    <div className="m-4 text-white">
                                        <p>Cultes , emissions , series</p>
                                    <h4>Decouvrir tous les medias</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div  style={{ backgroundImage: `url(${item})` }} className="iteme">
                                <div className="m-4 text-white">
                                    <p>Cultes , emissions , series</p>
                                    <h4>Decouvrir tous les medias</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div  style={{ backgroundImage: `url(${item1})` }} className="iteme">
                                    <div className="m-4 text-white">
                                    <p>Cultes , emissions , series</p>
                                    <h4>Decouvrir tous les medias</h4>
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