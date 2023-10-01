import RedirectionVersSite from "../../layout/FowardSite"

function Secteur(props) {
    return(
        <div className="secteur">
            <img src={props.image} className="mb-2" alt="section"/>
            <div>
                    <h5 className="mb-2 px-2">{props.title}</h5>
                    <p className="mb-2 px-2 opacity-50">{props.text}</p>
            </div>
            <button onClick={() => RedirectionVersSite(props.url)}>Visiter</button>
        </div>
    )
}

export default Secteur