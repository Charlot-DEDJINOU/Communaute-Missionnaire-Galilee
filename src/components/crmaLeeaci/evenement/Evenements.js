import { Container } from "react-bootstrap"
import Evenement from "./Evenement"
import img from '../../../assets/logo-combat-spirituel.jpg'

function Evenements() {

    const data = [
        {
            "id" : 1 ,
            "titre" : "Conférence - Combat Spirituel 2023",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "date" : "1er Août 2023" ,
            "heure" : "09h30 – 14h00",
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi" ,
            "image" : img,
            "passer" : false,
            "payant" : true
        } ,
        {
            "id" : 2 ,
            "titre" : "Conférence - Combat Spirituel 2023",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "date" : "1er Août 2023" ,
            "heure" : "09h30 – 14h00",
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi" ,
            "image" : img,
            "passer" : false,
            "payant" : true
        } ,
        {
            "id" : 3 ,
            "titre" : "Conférence - Combat Spirituel 2023",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "date" : "1er Août 2023" ,
            "heure" : "09h30 – 14h00",
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi" ,
            "image" : img,
            "passer" : true,
            "payant" : true
        }
    ]
    return(
        <section className="evenements">
            <Container className="d-flex justify-content-around flex-wrap">
                {
                  data.map(item => <Evenement {...item} key={item.id} />)
                }
            </Container>
        </section>
    )
}

export default Evenements