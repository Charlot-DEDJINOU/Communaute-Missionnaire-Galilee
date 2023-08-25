import Carousel from 'react-bootstrap/Carousel';
import "./presentation.css"
import image from "../../../assets/bapteme.jpg"
import image2 from "../../../assets/bapteme2.jpg"
import image1 from "../../../assets/bapteme1.jpg"

function Presentation() {

    const backgrounds = [image , image2 , image1]

    return (
        <Carousel data-bs-theme="dark" controls={false}>
            {backgrounds.map((item, index) =>  
                <Carousel.Item key={index}>
                    <section className='presentation-pastoral' style={{ backgroundImage: `url(${item})` }} >
                        <div className='fw-bold text-white titre-pastoral container fs-2 text-center mb-2 z-3'>Conseil International des Pasteurs de la Communauté Missionnaire Galilée</div>
                        <div className='texte-pastoral text-white fw-bold container fs-5 text-center mb-2 z-3'>
                            Faites donc bien attention à vous-mêmes et à tout le troupeau dont le Saint-Esprit vous a confié 
                            la responsabilité; prenez soin de l'Eglise de Dieu qu'il s'est acquise par son propre sang. Actes 20:28.
                        </div>
                        <span className='dime-pastoral fw-bold container text-center text-decoration-underline fst-italic z-3'>Payez désormais vos dîmes ici pasteurs & dirigeants.</span>
                    </section>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default Presentation;