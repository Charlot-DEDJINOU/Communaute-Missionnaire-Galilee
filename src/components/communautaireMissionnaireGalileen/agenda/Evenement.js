import item1 from "../../../assets/bapteme1.jpg"

function Evenement() {
    return(
        <div className="item-evenement my-2">
            <img src={item1} alt="evenement" />
            <div>
                <span className="date">Ven 08 Septembre</span>
                <span className="name">Charlot DEDJINOU</span>
                <span className="status">En présentiel</span>
            </div>
        </div>
    )
}

export default Evenement