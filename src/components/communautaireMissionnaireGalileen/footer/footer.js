import { Container } from "react-bootstrap"

function Footer(){
    return(
        <footer className="d-flex justify-content-center align-items-center" style={{ width : "100%" , height : "80px" , background : "green"}}>
            <Container className="text-white">Copyright © 2023 - Communauté Missionnaire Galilée</Container>
        </footer>
    )
}

export default Footer