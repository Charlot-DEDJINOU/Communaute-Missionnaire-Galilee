import WhatsappIcon from "../../_icons/WhatsappIcon"
import TwitterIcon from '../../_icons/TwitterIcon'
import FacebookIcon from "../../_icons/FacebookIcon"
import InstagramIcon from "../../_icons/InstagramIcon"
import YoutubeIcon from "../../_icons/YoutubeIcon"

function Contact() {
    return(
        <div className="header-contact">
          <b></b>
          <b>CONTACT I Cliquez ici pour contacter l'église</b>
          <div className="icone">
              <FacebookIcon/>
              <InstagramIcon />
              <TwitterIcon />
              <WhatsappIcon />
              <YoutubeIcon />
          </div>
        </div>
    )
}

export default Contact