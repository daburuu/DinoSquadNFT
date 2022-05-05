import './Header.scss';

function Header(){

    return(
        <div id="Header">
            <img className="logo" alt="logo" src="/DINO_LOGO.png"/>
            <nav>
                <ul>
                    <li>Team</li>
                    <li>Gallery</li>
                    <li className="middle">BUY YOUR DINO ON OPENSEA <img alt="opensea logo" src="/opensea.png" className="picto" /></li>
                    <li>Roadmap</li>
                    <li>Faq</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;