import { Container } from "react-bootstrap"
import "./theologie.css"

function TheologiePratique() {
    return(
        <section className="theologiePatrique p-5">
            <Container className="first mb-5">
                <div className="second">
                    <h3 className="text-center">Théologie Pratique</h3>
                    <p className="text-justify">Léonce DAGBO (apôtre), présente des thèmes pratiques sur la vie chrétienne et l’expérimentation de toute l’œuvre accomplie par Jésus le Christ, le Fils du Dieu vivant à la croix. De comprendre et combattre les fondements maléfiques, briser les malédictions générationnelles, le ministère de la nouvelle alliance, le ministère glorieux, etc. il illustre clairement et conduit de l’observation des fait bibliques, à l’analyse; la méthodologie pour vivre la restauration en Christ. <i>+ Savoir plus</i></p>
                </div>
            </Container>
            <Container className="third">
                <div>
                    <h3>Comment s’inscrire à IEE-ACI ?</h3>
                    <p>Pour les étudiants du monde entier, IEE-ACI s’engage à favoriser un environnement d’apprentissage relationnel, rigoureux et axé sur la communauté. Postulez dès aujourd’hui pour rejoindre notre communauté mondiale de dirigeants divers qui transforment le monde par l’Évangile.</p>
                    <h3>LIENS RAPIDES</h3>
                    <p>
                        <i>Discutez maintenant avec un conseiller aux admissions</i><br />        
                        <i>Rencontrez un conseiller aux admissions au centre</i><br />
                        Décidez quel programme vous convient<br />
                        Vérifiez les conditions d’admission<br />
                        Postulez maintenant<br />
                    </p>
                </div>
                <div>
                    <h3>Échéances à venir</h3>
                    <b>Date limite d’inscription au Certificat / Brevet / Diplôme Pastoral ou Missionnaire Automne 2023</b>
                    <p className="mt-2">Date limite de candidature –  31 Juillet 2023 </p>
                    <b>Date limite d’inscription au Certificat / Brevet Biblique Automne 2023</b>
                    <p className="mt-2">Date limite de candidature –  24 Juillet 2023 </p>
                </div>
            </Container>
        </section>
    )
}

export default TheologiePratique