import Container from 'react-bootstrap/Container';
import image from '../../../assets/image5.jpg'
import "./admission.css"

function Admission() {
    return (
        <Container className="admission my-5">
            <img src={image} alt="alt" className="image-admission"/>
            <div>
                <p className="text-center fs-3 fw-bold" style={{color : "#d09800"}}>Admissions plus complètes</p>
                <p style={{textAlign : "justify"}}>Où que vous vous trouviez dans le monde, IEE-ACI s’engage à favoriser un environnement d’apprentissage interpersonnel, axé sur la communauté et informé par le cœur relationnel de l’Évangile.</p>
                <p className='text-center'>Souhaitez-vous plus d’informations sur les programmes académiques de l’IEE-ACI ? Nous sommes là pour vous aider !</p>
                <i className='text-center admission-i'>Discutez maintenant avec un représentant des admissions</i>
                <button className="admissionbutton">Remplissez votre formulaire d'admission</button>
            </div>
        </Container>
    )
}

export default Admission