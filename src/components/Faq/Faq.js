import './Faq.scss';
import DinoBust from '../../assets/img/item_dino_bust.png';

function Faq(){

    return (
        <div id="Faq">
            <div className="content text-m col-md-6">
                <h2>Faq</h2>
                    <div>
                        <div className="question">1. What is Dino Squad ?</div>
                        <div className="answer">Dino Squad are 5555 unique 3D dino stored on the ETH blockchain. There are over 150+ designed traits to create these Dinos.</div>
                        <div className="question">2. How can i buy a Dino NFT ?</div>
                        <div className="answer">You will be able to mint the DinoSquad NFT directly on this website on launch day or on Opensea after the minting is complete.</div>
                        <div className="question">3. How many Dinos will be available? </div>
                        <div className="answer">A total of 5555 NFTs will be available to public, pre-sale, and giveaways.</div>
                        <div className="question">4. How much will it cost to mint a Dino NFT?</div>
                        <div className="answer">TBA</div>
                        <div className="question">5. What is the launch date/time? </div>
                        <div className="answer">TBA</div>
                        <div className="question">6. What is the "Minimum SPA"?</div>
                        <div className="answer">This is the minimum resell price we aim for the DinoSquad on the secondary market.</div>
                        <div className="question">7. How can I join the Whitelist?</div>
                        <div className="answer">Please check the 📋-whitelist-info channel on our discord to see how to join the Whitelist.</div>
                        <div className="question">8. How can I promote the project?</div>
                        <div className="answer">The best way to promote the project is by inviting people to the Discord channel. If you are an influencer and would like to work with us, please go to #🤝-project-collabs on our discord.</div>
                    </div>
            </div>
            <div className="dino">
                <img src={DinoBust} />
            </div>
        </div>
    );
}

export default Faq;