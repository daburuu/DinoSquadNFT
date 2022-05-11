import './Footer.scss';
import Logo from '../../assets/img/DINO_LOGO.png';
import Instagram from '../../assets/img/INSTA_LOGO.png';
import Twitter from '../../assets/img/TWITTER_LOGO.png';
import Discord from '../../assets/img/DISCORD_LOGO.png';
function Footer(){
    return(
        <div id="Footer">
            <div className="pull-left text-s">
                <a href="/">dinosquad.com</a>
                <a href="/">dinosquad.com</a>
            </div>
            <img className="logo" src={Logo}></img>
            <div className="pull-right">
                    <a href="/"><img className="picto" src={Instagram} /></a>
                    <a href="/"><img className="picto" src={Twitter} /></a>
                    <a href="/"><img className="picto" src={Discord} /></a>
            </div>
        </div>
    );
}

export default Footer;