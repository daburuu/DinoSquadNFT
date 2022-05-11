import './Merch.scss';
import Instagram from '../../assets/img/INSTA_LOGO.png';
import Twitter from '../../assets/img/TWITTER_LOGO.png';
import Discord from '../../assets/img/DISCORD_LOGO.png';
import Shirt1 from '../../assets/img/item_thirt1.png';
import Shirt2 from '../../assets/img/item_thirt2.png';
function Merch(){
    return(
        <div id="Merch">
            <div className="content">
                <div className="socials-link">
                    <a href="/"><img className="picto" src={Instagram} /></a>
                    <a href="/"><img className="picto" src={Twitter} /></a>
                    <a href="/"><img className="picto" src={Discord} /></a>
                </div>
                <div className="merch">
                    <div className="text text-l">
                        Purchase<br/> our merch
                    </div>
                    <div className="shirts">
                        <img src={Shirt1} />
                        <img src={Shirt2} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Merch;