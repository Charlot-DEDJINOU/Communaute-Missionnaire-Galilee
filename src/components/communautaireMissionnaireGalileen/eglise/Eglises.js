import { Container } from "react-bootstrap"
import { useState } from "react"
import item from "../../../assets/bapteme1.jpg"
import Eglise from "./Eglise"
import "./eglise.css"

function Eglises() {

    const allData = [
        {
            "id" : 1 ,
            "titre" : "Eglise Chrétienne Lusanger" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "frequence" : "Cultes toutes les trois semaines - Nous consulter" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47",
            "type" : "eglise"
        },
        {
            "id" : 2 ,
            "titre" : "Vie et Lumière - Mission Évangélique des Tziganes" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "frequence" : "Cultes toutes les trois semaines - Nous consulter" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47",
            "type" : "federation"
        },
        {
            "id" : 3 ,
            "titre" : "Radio Maranatha Jésus Revient" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "frequence" : "Cultes toutes les trois semaines - Nous consulter" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47",
            "type" : "eglise"
        },
        {
            "id" : 4 ,
            "titre" : "Conseil des Eglises Protestantes Évangéliques du Bénin" ,
            "auteur" : "DAGBO Leonce" ,
            "adresse" : "Hôtel Threeland - 50 rue Pierre Hamange - Luxembourg" ,
            "contact" : "leonceloise@gmail.com" ,
            "frequence" : "Cultes toutes les trois semaines - Nous consulter" ,
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47",
            "type" : "federation"
        }
    ]

    const [data , setData] = useState(allData)

    const search = (input) => {
       const text = input.target.value
       setData(allData.filter(item => item.titre.includes(text)))
    }

    const handleChange = (text) => {
        setData(allData.filter(item => text.includes(item.type)))
    }

    return(
        <Container className="eglises">
            <div className="d-flex justify-content-center align-items-center couvecture fs-2 fw-bold" style={{ backgroundImage: `url(${item})` }}></div>
            <div className="mt-5 presentation">
                <h1>Des églises avec qui nous collaborons dans toute la francophonie.</h1>
                <p><b><i>« Les Églises se fortifiaient dans la foi et augmentaient en nombre de jour en jour. » Actes 16:5</i></b><br />
                Le communautaire Missionnaire Galileen collabore avec diverses églises en francophonie. Certaines sont nées de son ministère, d’autres s’y sont associées. N’hésitez pas à les rejoindre si elles sont proches de vous.</p>
            </div>
            <div className="my-5">
                <div className="search mb-5">
                    <input type="text" onChange={search} placeholder="Rechercher"/>
                    <button onClick={() => handleChange("eglise et federation")}>Tout</button>
                    <button onClick={() => handleChange("eglise")}>Eglises</button>
                    <button onClick={() => handleChange("federation")}>Federations</button>
                </div>
                <div className="d-flex flex-wrap justify-content-evenly all-eglises my-3">
                    {
                        data.map(item => <Eglise {...item} key={item.id} />)
                    }
                </div>
            </div>
        </Container>
    )
}

export default Eglises