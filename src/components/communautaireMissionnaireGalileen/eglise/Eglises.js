import { Container } from "react-bootstrap"
import item from "../../../assets/bapteme1.jpg"
import Eglise from "./Eglise"
import "./eglise.css"

function Eglises() {

    const data = [
        {
            "id" : 1 ,
            "title" : "Temple Montagne de Sion d'Abomey-Calavi" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 2 ,
            "title" : "Temple Piscine de Bethesda de Lokogbo" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 3 ,
            "title" : "Temple Philadelphie de Zounta" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 4 ,
            "title" : "Temple Bethel de Sèhomi" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 5 ,
            "title" : "Temple Résurrection de Kpétou" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 6 ,
            "title" : "Temple Mont Moriya de Natitingou" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        }
    ]
    return(
        <Container className="eglises">
            <div className="d-flex justify-content-center align-items-center couvecture fs-2 fw-bold" style={{ backgroundImage: `url(${item})` }}></div>
            <div className="mt-5 presentation">
                <h1>Des églises avec qui nous collaborons dans toute la francophonie.</h1>
                <p><b><i>« Les Églises se fortifiaient dans la foi et augmentaient en nombre de jour en jour. » Actes 16:5</i></b><br />
                Le communautaire Missionnaire Galileen collabore avec diverses églises en francophonie. Certaines sont nées de son ministère, d’autres s’y sont associées. N’hésitez pas à les rejoindre si elles sont proches de vous.</p>
            </div>
            <div className="my-5">
                <div>
                    <input type="text" />
                    <button>Eglises</button>
                    <button>Federations</button>
                </div>
                <div className="d-flex flex-wrap all-eglises my-3">
                    {
                        data.map(item => <Eglise {...item} key={item.id} />)
                    }
                </div>
            </div>
        </Container>
    )
}

export default Eglises