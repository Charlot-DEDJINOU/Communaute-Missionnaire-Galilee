import WhatsappIcon from "../../_icons/WhatsappIcon"
import TwitterIcon from '../../_icons/TwitterIcon'
import FacebookIcon from "../../_icons/FacebookIcon"
import InstagramIcon from "../../_icons/InstagramIcon"
import YoutubeIcon from "../../_icons/YoutubeIcon"
import { useEffect , useState } from "react"

function Contact() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <div className="header-contact">
          {windowSize.width > 900 && <b></b>}
          {windowSize.width > 700 && <b>CONTACT I Cliquez ici pour contacter l'église</b>}
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