import "./presentation.css"
import { useNavigate } from "react-router-dom";

function Presentation() {

    const navigate = useNavigate()
    
    return (
        <section className='presentation-crmaLeeaci'>
            <h1 className="mb-5 text-center">Bienvenue à l’IEE-ACI !</h1>
            <h4 className="mb-5 text-center">Institut Evangélique Education – Appui Conseil International</h4>
            <div className="buttons">
                <button className="presentation-crmaLeeacibutton" onClick={() => navigate('/inscription')}>Inscrivez vous</button>
                <button className="presentation-crmaLeeacibutton" onClick={() => navigate('/cmracontact')}>Contactez nous</button>
            </div>
        </section>
    );
}

export default Presentation;