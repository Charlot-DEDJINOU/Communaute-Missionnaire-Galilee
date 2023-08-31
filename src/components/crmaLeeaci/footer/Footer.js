import WhatsappIcon from "../../_icons/WhatsappIcon"
import TwitterIcon from '../../_icons/TwitterIcon'
import FacebookIcon from "../../_icons/FacebookIcon"
import InstagramIcon from "../../_icons/InstagramIcon"
import "./footer.css"

function Footer() {
    return(
        <footer className="footer-crma">
            <div className="information">
                <div>
                    <h3>Contact</h3>
                    <p>+229 40 11 50 54</p>
                    <p>+229 45 26 77 00</p>
                    <p>C8RX+JX3, Abomey Calavi</p>
                    <p>info@crma-ieeaci.online</p>
                </div>
                <div>
                    <WhatsappIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className="copyrigth">
                <div>
                    <span>Copyright © 2001 - 2023 IEE-ACI la Parole + Onction du Saint-Esprit</span>
                    <span>Communauté Missionnaire Galilée</span>
                    <span>N° Enregistrement : 012 / MISP / DC / SGM / DAIC / SACC / SA N° IFU : 6202339452191</span>
                </div>
                <div>
                    Institut Evangélique Education - Appui Conseil International ne fait aucune discrimination fondée sur la race, la couleur, l'origine nationale, le sexe, le handicap ou l'âge dans ses politiques, programmes et activités. Lisez la déclaration de l'IEE-ACI sur la non-discrimination. 
                </div>
            </div>
        </footer>
    )
}

export default Footer