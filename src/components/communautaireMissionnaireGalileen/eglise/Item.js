import { useNavigate } from "react-router-dom"

function Item(props) {

    const navigate = useNavigate()
    
    return(
        <div style={{ backgroundImage: `url(${props.image})` }} className="d-flex flex-column align-items-center mb-5 item">
            <h3 className="my-5 text-white fw-bold">{props.title}</h3>
            <p className="text-white px-10 text-center" style={{fontSize : "13px"}}>{props.text}</p>
            <button className="mt-3" onClick={() => navigate(props.url)}>{props.buttonValue}</button>
        </div>
    )
}

export default Item