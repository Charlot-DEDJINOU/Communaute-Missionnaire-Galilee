import "./eglise.css"
import { Container } from "react-bootstrap"
import item1 from "../../../assets/bapteme1.jpg"
import Item from "./Item"

function SectionEglise()
{

    const data = [
        {
            'id' : 1 ,
            'image' : item1 ,
            'title' : "Les secteurs",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Découvrez nos secteur" ,
            "url" : "/secteurs"
        },
        {
            'id' : 2 ,
            'image' : item1 ,
            'title' : "Fédarations et Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises partenaires" ,
            "url" : "/eglises"
        },
        {
            'id' : 3,
            'image' : item1 ,
            'title' : "Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises" ,
            "url" : "/secteurs"
        },
        {
            'id' : 4 ,
            'image' : item1 ,
            'title' : "Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises" ,
            "url" : "/secteurs"
        }
    ]

    return(
        <section className="section-eglise my-5" id="eglise">
            <Container>
                <div className="mb-2 titre">
                    <h2>Au coeur de l’Église</h2>
                    <p>L'église est faite d’hommes et de femmes unis par le lien de la foi. Vous découvrirez au cœur de l’église tous les espaces nous permettant de nous rencontrer et d’œuvrer ensemble pour le Royaume de Dieu.</p>
                </div>
                <div className="items d-flex flex-wrap justify-content-between">
                    {
                        data.map(item => <Item {...item} key={item.id}/> )
                    }
                </div>
            </Container>
        </section>
    )
}

export default SectionEglise