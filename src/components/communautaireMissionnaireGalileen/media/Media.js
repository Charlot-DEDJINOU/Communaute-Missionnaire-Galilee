import image1 from "../../../assets/bapteme.jpg"
import image2 from "../../../assets/bapteme2.jpg"
import image3 from "../../../assets/bapteme1.jpg"
import ArrowIcon from "../../_icons/ArrowIcon"
import { Container } from "react-bootstrap"
import "./media.css"
import { useState } from "react"

function Media()
{
    const [image , setImage] = useState(image1)

    return(
        <section className="media">
            <Container className="media-container">
                <img src={image} alt="image"/>
                <div className="options">
                    <div className="item mb-4" onMouseEnter={() => setImage(image1)}>
                        <span className="fs-1 d-inline-block">Cultes</span>
                        <span className="d-inline-block" style={{color : "blue"}}><ArrowIcon /></span>
                    </div>
                    <div className="item mb-4" onMouseEnter={() => setImage(image2)}>
                        <span className="fs-1 d-inline-block">Emissions</span>
                        <span className="d-inline-block" style={{color : "blue"}}><ArrowIcon /></span>
                    </div>
                    <div className="item mb-4" onMouseEnter={() => setImage(image3)}>
                        <span className="fs-1 d-inline-block">Pour en enfant</span>
                        <span className="d-inline-block" style={{color : "blue"}}><ArrowIcon /></span>
                    </div>
                    <button className="btn btn-primary fw-medium py-3 mt-5">Voir le dernier culte</button>
                </div>
            </Container>
        </section>
    )
}

export default Media