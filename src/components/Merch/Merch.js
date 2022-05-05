import './Merch.scss';

function Merch(){
    return(
        <div id="Merch">
            <div className="content">
                <div className="socials-link">
                    <a href="/"><img className="picto" src="/INSTA_LOGO.png" /></a>
                    <a href="/"><img className="picto" src="/TWITTER_LOGO.png" /></a>
                    <a href="/"><img className="picto" src="/DISCORD_LOGO.png" /></a>
                </div>
                <div className="merch">
                    <div className="text text-l">
                        Purchase<br/> our merch
                    </div>
                    <div className="shirts">
                        <img src="/item_thirt1.png" />
                        <img src="/item_thirt2.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Merch;