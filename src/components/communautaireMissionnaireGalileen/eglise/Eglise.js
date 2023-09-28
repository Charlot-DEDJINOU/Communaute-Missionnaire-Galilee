function Eglise(props) {
    return (
        <div className="eglise">
            <h4>{props.titre}</h4>
            <p>{props.auteur}</p>
            <p style={{color : "blue"}}>{props.adresse}</p>
            <p>{props.frequence}</p>
            <p>{props.contact}</p>
        </div>
    )
}

export default Eglise