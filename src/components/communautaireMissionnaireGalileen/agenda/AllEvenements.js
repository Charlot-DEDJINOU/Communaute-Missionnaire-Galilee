import { Container } from "react-bootstrap"
import Evenement from "../../crmaLeeaci/evenement/Evenement"
import img from '../../../assets/logo-combat-spirituel.jpg'
import { useState } from "react"

function AllEvenements() {

    const allData = [
        {
            "id" : 2 ,
            "titre" : "Troisième convention des Enfants" ,
            "date" : "Jeudi 04 sept 2024" ,
            "lieu" : "Centre IEE-ACI d’Abomey-Calavi",
            "theme" : "LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL",
            "heure" : "09h30 – 14h00",
            "image" : img,
            "passer" : false,
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
            "image" : img ,
            "passer" : true,
            "payant" : false
        },
        {
            "id" : 1 ,
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
       const text = input.target.value
       setData(allData.filter(item => item.titre.toLowerCase().includes(text.toLowerCase())))
    }

    const handleChange = (text) => {
        setData(allData.filter(item => text.includes(item.type)))
    }

    return(
        <section className="allEvenements evenements">
            <Container className="search my-5">
                <input type="text" onChange={search} placeholder="Rechercher"/>
                <button onClick={() => handleChange("eglise et federation")}>Tout Evenements</button>
                <button onClick={() => handleChange("eglise")}>Evenements passés</button>
                <button onClick={() => handleChange("federation")}>Evenements Futurs</button>
            </Container>
            <Container className="d-flex justify-content-around flex-wrap">
                {
                  data.map(item => <Evenement {...item} key={item.id} />)
                }
            </Container>
        </section>
    )
}

export default AllEvenements