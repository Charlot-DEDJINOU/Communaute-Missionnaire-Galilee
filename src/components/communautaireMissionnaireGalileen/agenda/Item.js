function Item(props) {
    return(
        <div className="item-evenement my-2">
            <span className="date fw-bold">{props.titre}</span>
            <span className="name">{props.date}</span>
            <span className="status">{props.lieu}</span>
        </div>
    )
}

export default Item