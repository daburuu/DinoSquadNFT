
import './Mint.scss';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import dinoSquadAbi from '../../dinosquadAbi.json';
import DinoSneak from '../../assets/img/DINO_SNEAK.png';
import DinoLogo from '../../assets/img/DINO_LOGO.png';
export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export class Contract{
    contract = null;
    constructor(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        this.contract = new ethers.Contract(
            contractAddress,
            dinoSquadAbi.abi,
            signer
        );
    }
}

function Mint(){
    const [saleState, setSaleState] = useState(null)
    const [view, setView] = useState("public");
    const [accounts, setAccounts] = useState([]);
    const [minteds, setMinteds] = useState(0);
    const [numberToken, setNumberToken] = useState(1);
    const [message, setMessage] = useState({
        message: null,
        type: null
    });

    function reduce(){
        if(numberToken > 1){
            setNumberToken(numberToken - 1);
        }
    }

    function increment(){
        if(numberToken < 2){
            setNumberToken(numberToken + 1);
        }
    }

    function setNotification(text, type){
        setMessage({
            message: text,
            type: type
        });
        setTimeout(() => {
            setMessage({
                message: null,
                type: null
            });
        }, 2500);
    }

    async function connectWallet(){
        if(accounts.length != 0){
            setNotification("Already connected.", "info");
            return;
        }
        if(window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
            setAccounts(accounts);
            setNotification("Connected to ETH Mainnet", "success");
        } else {
            setNotification("No wallet provider found.", "alert");
        }
    }

    function disconnectWallet() {
        setAccounts([]);
        setNotification("Disconnected from ETH Mainnet", "info")
    }
    async function getSaleState(){
        const instance = new Contract();
        try{
            const saleState = await instance.contract.saleActive();
            setSaleState(saleState);
        } catch(err) {
            console.log(err);
        }
    }

    async function getTotalMinteds(){
        const instance = new Contract();
        try{
            const minteds = await instance.contract.totalSupply();
            setMinteds(minteds.toString());
        } catch (err) {
            console.log(err);
        }
    }

    async function mintWl() {

    }

    async function mint() {
        const instance = new Contract();
        try {
            let value = (0.123 * numberToken).toString();
            let response = await instance.contract.mint(numberToken, { value: ethers.utils.parseEther(value) });
            console.log("response: ", response);
            console.log(response);
        } catch (err) {
            switch (true) {
                case (err.message.indexOf("insufficient funds") != -1):
                    setNotification("Insufficient funds for transaction", "alert");
                    break;
                case (err.message.indexOf("Sale must be active") != -1):
                    setNotification("Sale must be active", "alert");
                    break;
                case (err.message == "Internal JSON-RPC error."):
                    if(err.data.message.indexOf("Max mint is 2 per wallet") != -1) {
                        setNotification("Max mint is 2 per wallet", "alert");
                    } else if (err.data.message.indexOf("Not enough tokens left") != -1) {
                        setNotification("Not enough tokens left", "alert");
                    } 
                    break;
            }
        }
    }

    useEffect(() => {
        getSaleState();
        getTotalMinteds();
    }, [])
    
    return(
        <div id="Mint">
            <div className="header">
                <a href="/"><img src={DinoLogo} /></a>
            </div>
            <div className="content">
                <div className="toggle-btns">
                    <button className={`view-public${view == "public" ? " selected" : ""}`} onClick={() => { setView("public") }}>Public mint</button>
                    <button className={`view-whitelist${view == "whitelist" ? " selected" : ""}`} onClick={() => { setView("whitelist") }}>WhiteList mint</button>
                </div>
                <div className="bottom">    
                    {view == "public" && 
                        <div className="public-window">
                            <div>Public mint</div>
                            <button className="less" disabled={!saleState || !accounts.length} onClick={reduce}>-</button>
                            <div className="token-number">{numberToken}</div>
                            <button className="plus" disabled={!saleState || !accounts.length} onClick={increment}>+</button>
                            <button className="mint" disabled={!saleState || !accounts.length} onClick={mint}>Mint</button>
                        </div>
                    }
                    {view == "whitelist" &&
                        <div className="whitelist-window">
                            <div>Whitelist mint</div>
                            <button className="less" disabled={!saleState || !accounts.length} onClick={reduce}>-</button>
                            <div className="token-number">{numberToken}</div>
                            <button className="plus" disabled={!saleState || !accounts.length} onClick={increment}>+</button>
                            <button className="mint" disabled={!saleState || !accounts.length} onClick={mintWl}>Mint</button>
                        </div>
                    }
                    { accounts.length == 0 && 
                        <button className="connect-btn" onClick={() => { connectWallet() }}>Connect wallet</button>
                    }
                    {
                        accounts.length != 0 && 
                        <button className="disconnect-btn" onClick={() => { disconnectWallet() }}>Disconnect wallet</button>
                    }
                    <div className="infos">
                        <div className="sale-state">Sale is currently <span className={`${saleState ? "active" : "disabled"}`}>{saleState ? 'active' : 'disabled'}</span></div>
                        <div className="minteds">Already minteds: {minteds}/5555</div>
                    </div>
                </div>
                <img className="dino" src={DinoSneak} />
            </div>
            <div className={`notifications${message.message ? ' visible' : ''} ${message.message ? message.type : ''}`}>{message.message}</div>
        </div>
    )
}

export default Mint;