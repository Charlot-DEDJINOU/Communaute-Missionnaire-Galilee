import image from "../../../assets/LOGO-CONSEIL-NATIONAL-PASTEURS-CMG.jpg"
import leonce from "../../../assets/Leonce-dagbo.jpeg"
import Container from 'react-bootstrap/Container';
import "./about.css"

function About() {
    return(
        <>
            <section className="about-pastoral mt-5">
                <Container className="about">
                        <img src={image} alt="alt" className="image-about"/>
                        <div>
                            <p className="text-center fs-3 fw-bold" style={{color : "#d09800"}}>Notre Objectif</p>
                            <p style={{textAlign : "justify"}}>Bienvenu au Conseil International des Pasteurs de la Communauté Missionnaire Galilée. Pasteurs (apôtre, prophète, évangéliste, pasteur, docteur) et collaborateurs du pasteur (secrétaire, trésorier, diacre, ancien , pasteur laïc), c’est votre page officielle pour toutes vos activités, pastorales et rapports d’activités. Revenez chaque fois consulter les nouvelles et actualités pastorales.</p>
                            <button className="aboutbutton">Contactez nous</button>
                        </div>
                </Container>
            </section>
            <section className="message-president py-5 mt-5">
               <Container className="d-flex flex-column align-items-center">
                    <p className="text-center fs-2 fw-bold" style={{color : "#d09800"}}>Message du Président de la Communauté Missionnaire Galilée</p>
                    <p style={{textAlign : "justify"}}>
                        Dans la pastorale il s'agit d'abord de reconsidérer le ministère pastoral comme étant à la fois vocation et métier. Un métier vocationnel impliquant des activités didactiques, culturelles, thérapeutiques, socio-économiques et spirituelles à partir de l'activité de prédication ou d'enseignement de la Parole. Le ministère pastoral (apôtre, prophète, évangéliste, pasteur et enseignant) et collaborateur du pasteur (secrétaire, trésorier, diacre, diaconesse, ancien, pasteur laïc) à la Communauté Missionnaire Galilée sont le service qu'un croyant ou une croyante accomplit selon un appel particulier de Dieu pour l'Église et la mission. Alors un pasteur est celui qui exerce la plus haute fonction de gestion et d'enseignement, c'est pourquoi je vous exhorte vivement :
                        <i><b>prenez soin du troupeau de Dieu qui est sous votre garde en veillant sur lui non par contrainte, mais de bon gré, selon Dieu. Faites-le non par recherche d’un gain, mais avec dévouement, non en dominant sur ceux qui vous sont confiés, mais en étant les modèles du troupeau. Ainsi, lorsque le souverain berger apparaîtra, vous recevrez la couronne de gloire qui ne perd jamais son éclat.1Pierre 5:2-4</b></i>
                        <i><b>Veille sur toi-même et sur ton enseignement. Mets-y de la persévérance, car en agissant ainsi, tu te sauveras toi-même ainsi que ceux qui t'écoutent. 1Timothée 4:16</b></i>
                    </p>
                    <div className="d-flex  align-items-center mt-3">
                        <img src={leonce} alt="Leonce DAGBO" style={{width : "250px" , height : "250px" , borderRadius : "50%" , objectFit : "contain"}}/>
                        <span className="d-inline-block mx-3 fw-bold fs-4">Leonce DAGBO <br />apôtre</span>
                    </div>
               </Container>
            </section>
            <section className="information-pastoral d-flex justify-content-center  align-items-center fw-bold fs-6 text-white fst-italic text-center py-3">
                <p>Comme de bon intendant et dispensateur : Pasteur, Dirigeant, Directeur, Secrétaire, Trésorier, Evêque-Adjoint, Evêque, déposez ici vos rapports et procès verbaux.</p>
            </section>
        </>
    )
}

export default About