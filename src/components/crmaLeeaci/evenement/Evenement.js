import img from '../../../assets/logo-combat-spirituel.jpg'
import "./evenement.css"
import {useNavigate} from "react-router-dom"

function Evenement() {

    const navigate = useNavigate()

    return(
        <div className='evenement my-3'>
            <img src={img} alt='evenement' width = "300px" height="200px" className='m-auto p-2'/>
            <p className='my-3 text-center fs-4 fw-bold px-2'>Conférence - Combat Spirituel 2023</p>
            <p className='my-3 text-center fs-6 fw-medium px-2'>LES PORTES ETERNELLES : IMPACT ET DEFIS DANS LE COMBAT POUR LE REGNE SPIRITUEL</p>
            <p className='d-flex flex-column my-2 p-2'>
                <span className='my-2'><b>Date :</b> 1er Août 2023</span>
                <span className='my-2'><b>Heure :</b> 09h30 – 14h00</span>
                <span className='my-2'><b>Lieu :</b> Centre IEE-ACI d’Abomey-Calavi</span>
            </p>
            <p className='place' onClick={() => navigate('/inscriptionEvenement')}>Réservez votre place ici</p>
        </div>
    )
}

export default Evenement
