function Activitie(props)
{
    return(
        <div style={{ backgroundImage: `url(${props.image})`}} className="activite mx-3">
            <p className="text-white mb-2 fs-1">{props.text}</p>
        </div>
    )
}

export default Activitie