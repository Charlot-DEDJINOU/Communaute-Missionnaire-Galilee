import image from '../../../assets/image5.jpg'

function Offre({title , description}) {
    return(
        <div className="offre my-2">
            <img src={image} alt="alt" className="" width="300px" height="200px"/>
            <h4 className="text-center">{title}</h4>
            <p className="text-center mt-2">{description}</p>
        </div>
    )
}

export default Offre