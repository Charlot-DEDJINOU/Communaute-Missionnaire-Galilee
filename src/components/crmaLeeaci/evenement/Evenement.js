import "./evenement.css"
import {useNavigate} from "react-router-dom"

function Evenement(props) {

    const navigate = useNavigate()

    return(
        <div className='evenement my-3'>
            <img src={props.image} alt='evenement' width = "300px" height="200px" className='m-auto p-2'/>
            <p className='my-3 text-center fs-4 fw-bold px-2'>{props.titre}</p>
            <p className='my-3 text-center fs-6 fw-medium px-2'>{props.theme}</p>
            <p className='d-flex flex-column my-2 p-2'>
                <span className='my-2'><b>Date :</b> {props.date}</span>
                <span className='my-2'><b>Heure :</b> {props.heure}</span>
                <span className='my-2'><b>Lieu :</b> {props.lieu}</span>
            </p>
            {props.passer === false && <p className='place' onClick={() => navigate('/inscriptionEvenement')}>Réservez votre place ici</p> }
            {props.passer && <p className='passer'>Evenement passé</p> }
        </div>
    )
}

export default Evenement
