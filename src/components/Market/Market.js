import './Market.scss';
import OpenSea from '../../assets/img/opensea.png';

function Market(){

    return(
        <div id="Market">
            <a className="btn-primary" href="#">Buy your dino <span>on opensea <img src={OpenSea} /></span></a>
        </div>
    )
}

export default Market;