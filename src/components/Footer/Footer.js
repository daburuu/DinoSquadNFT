import './Footer.scss';

function Footer(){
    return(
        <div id="Footer">
            <div className="pull-left text-s">
                <a href="/">dinosquad.com</a>
                <a href="/">dinosquad.com</a>
            </div>
            <img className="logo" src="/DINO_LOGO.png"></img>
            <div className="pull-right">
                <a href="/"><img className="picto" src="/INSTA_LOGO.png" /></a>
                <a href="/"><img className="picto" src="/TWITTER_LOGO.png" /></a>
                <a href="/"><img className="picto" src="/DISCORD_LOGO.png" /></a>
            </div>
        </div>
    );
}

export default Footer;