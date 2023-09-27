import { Container } from "react-bootstrap"
import item from "../../../assets/bapteme1.jpg"
import Secteur from "./Secteur"
import "./secteur.css"

function Secteurs() {

    const data = [
        {
            "id" : 1 ,
            "image" : item ,
            "title" : "Temple Montagne de Sion d'Abomey-Calavi" ,
            "text" : "Le secteur de Colmar propose plus de 70 groupes de maisons. Si vous habitez dans ce secteur, il y...",
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 2 ,
            "image" : item ,
            "title" : "Temple Piscine de Bethesda de Lokogbo" ,
            "text" : "Le secteur de Colmar propose plus de 70 groupes de maisons. Si vous habitez dans ce secteur, il y...",
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 3 ,
            "image" : item ,
            "title" : "Temple Philadelphie de Zounta" ,
            "text" : "Le secteur de Colmar propose plus de 70 groupes de maisons. Si vous habitez dans ce secteur, il y...",
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 4 ,
            "image" : item ,
            "title" : "Temple Bethel de Sèhomi" ,
            "text" : "Le secteur de Colmar propose plus de 70 groupes de maisons. Si vous habitez dans ce secteur, il y...",
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 5 ,
            "image" : item ,
            "title" : "Temple Résurrection de Kpétou" ,
            "text" : "Le secteur de Colmar propose plus de 70 groupes de maisons. Si vous habitez dans ce secteur, il y...",
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        },
        {
            "id" : 6 ,
            "image" : item ,
            "title" : "Temple Mont Moriya de Natitingou" ,
            "text" : "Le secteur de Colmar propose plus de 70 groupes de maisons. Si vous habitez dans ce secteur, il y...",
            "url" : "https://maps.app.goo.gl/D9nWQZJw7HADTMk47"
        }
    ]
    return(
        <Container className="secteurs">
            <div className="d-flex justify-content-center align-items-center couvecture fs-2 fw-bold" style={{ backgroundImage: `url(${item})` }}></div>
            <div className="mt-5 presentation">
                <h2>Rejoignez un de nos secteurs géographiques ou thématiques pour ne pas être seul(e) !</h2>
                <p>Au-delà des cultes que nous pouvons vivre tous ensemble, les relations fraternelles s’expriment aussi dans une proximité de coeur à coeur avec des frères et soeurs. Un groupe de maison, c’est comme une famille qui s’entraide, qui partage et qui accompagne. Soyez le ou la bienvenu(e) !</p>
            </div>
            <div className="d-flex flex-wrap all-secteurs my-5">
               {
                    data.map(item => <Secteur {...item} key={item.id} />)
               }
            </div>
        </Container>
    )
}

export default Secteurs