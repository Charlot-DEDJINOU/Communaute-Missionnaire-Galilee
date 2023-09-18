import "./eglise.css"
import { Container } from "react-bootstrap"
import item1 from "../../../assets/bapteme1.jpg"
import Item from "./Item"

function Eglise()
{

    const data = [
        {
            'image' : item1 ,
            'title' : "Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises"
        },
        {
            'image' : item1 ,
            'title' : "Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises"
        },
        {
            'image' : item1 ,
            'title' : "Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises"
        },
        {
            'image' : item1 ,
            'title' : "Églises partenaires",
            'text' : "Venez nous rejoindre pour rencontrer de nouveaux amis autour de la Parole de Dieu.",
            'buttonValue' : "Voir les eglises"
        }
    ]

    return(
        <section className="eglise my-5">
            <Container>
                <div className="mb-2 titre">
                    <h2>Au coeur de l’Église</h2>
                    <p>L'église est faite d’hommes et de femmes unis par le lien de la foi. Vous découvrirez au cœur de l’église tous les espaces nous permettant de nous rencontrer et d’œuvrer ensemble pour le Royaume de Dieu.</p>
                </div>
                <div className="items d-flex flex-wrap justify-content-between">
                    {
                        data.map(item => <Item {...item} /> )
                    }
                </div>
            </Container>
        </section>
    )
}

export default Eglise