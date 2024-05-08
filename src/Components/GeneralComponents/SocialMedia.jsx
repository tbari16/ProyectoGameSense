import './SocialMedia.css'

import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';

const SocialMedia = () => {
    return (
        <>
            <div className="socialMedia-container">
                <h3>Redes sociales</h3>
                <div className="icons">
                    <a href="" className="social-media"><img src={facebookIcon} alt="" /></a>
                    <a href="" className="social-media"><img src={twitterIcon} alt=""/></a>
                    <a href="" className="social-media"><img src={instagramIcon} alt=""/></a>
                </div>
            </div>
        </>
    )
}

export default SocialMedia;