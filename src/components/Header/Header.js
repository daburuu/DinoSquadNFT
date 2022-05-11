import './Header.scss';
import Logo from '../../assets/img/DINO_LOGO.png';
import OpenSea from '../../assets/img/opensea.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header(){

    return(
        <div id="Header">
            <img className="logo" alt="logo" src={Logo}/>
            <nav>
                <ul>
                    <li><AnchorLink offset="100"href="#Team">Team</AnchorLink></li>
                    <li><AnchorLink offset="100"href="#Gallery">Gallery</AnchorLink></li>
                    <li className="middle"><a href="">BUY YOUR DINO ON OPENSEA <img alt="opensea logo" src={OpenSea} className="picto" /></a></li>
                    <li><AnchorLink offset="100"href="#Roadmap">Roadmap</AnchorLink></li>
                    <li><AnchorLink offset="100"href="#Faq">Faq</AnchorLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;