import { Container } from "react-bootstrap"
import Evenement from "../../crmaLeeaci/evenement/Evenement"
import img from '../../../assets/logo-combat-spirituel.jpg'
import { useState } from "react"

function EvenementsFutur() {

    const allData = [
        {
            "id" : 1 ,
            "titre" : "Première convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "heure" : "09h30 – 14h00",
            "image" : img,
            "passer" : false,
            "payant" : false
        } ,
        {
            "id" : 2 ,
            "titre" : "Troisième convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "heure" : "09h30 – 14h00",
            "image" : img,
            "passer" : true,
            "payant" : false
        } ,
        {
            "id" : 3 ,
            "titre" : "Deuxième convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "heure" : "09h30 – 14h00",
            "image" : img,
            "passer" : false,
            "payant" : false
        },
        {
            "id" : 4 ,
            "titre" : "Première convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "heure" : "09h30 – 14h00",
            "image" : img,
            "passer" : true,
            "payant" : false
        }
    ]

    const [data , setData] = useState(allData)

    const search = (input) => {
        const text = input.target.value.toLowerCase()
        setData(allData.filter(item => item.titre.toLowerCase().includes(text)))
    }

    return(
        <section className="evenementsFutur evenements">
            <Container className="my-5">
                <input type="text" placeholder="Rechercher" onChange={search}/>
            </Container>
            <Container className="d-flex justify-content-around flex-wrap">
                {
                  data.map(item => <Evenement {...item} key={item.id} />)
                }
            </Container>
        </section>
    )
}

export default EvenementsFutur