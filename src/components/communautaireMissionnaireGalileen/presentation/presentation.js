import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import "./presentation.css"
import item from "../../../assets/bapteme1.jpg"
import item1 from "../../../assets/bapteme1.jpg"
import item2 from "../../../assets/bapteme1.jpg"

function Presentation() {
    return(
       <section className="presentation-communautaire mb-5">
            <Container className="presentation-container">
                <h1 className="text-center mb-3">
                    Bienvenue au <span style={{}}>Coeur </span> de l'église !
                </h1>
                <div className="carousel-communautaire">
                    <Carousel controls={false}>
                        <Carousel.Item style={{ backgroundImage: `url(${item})` }} className="item">
                            <div className="m-4 text-white">
                                <p>Cultes , emissions , series</p>
                                <h4>Decouvrir tous les medias</h4>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item style={{ backgroundImage: `url(${item1})` }} className="item">
                            <div className="m-4 text-white">
                                <p>Cultes , emissions , series</p>
                                <h4>Decouvrir tous les medias</h4>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item style={{ backgroundImage: `url(${item2})` }} className="item">
                            <div className="m-4 text-white">
                                <p>Cultes , emissions , series</p>
                                <h4>Decouvrir tous les medias</h4>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
       </section>
    )
}

export default Presentation