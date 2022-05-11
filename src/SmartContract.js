import { useEffect, useState } from 'react';
import './SmartContract.scss';
import { ethers } from 'ethers';
import dinosquadAbi from './dinosquadAbi.json';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

export let whitelistAdresses = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
    "0x976ea74026e726554db657fa54763abd0c3a0aa9",
];
const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

function SmartContract(){
    const [accounts, setAccounts] = useState([]);

    async function setSaleActive(){
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              dinosquadAbi.abi,
              signer
            );
            try {
              let response = await contract.setSaleState(true);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async function setSaleInactive(){
      if(window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            dinosquadAbi.abi,
            signer
          );
          try {
            let response = await contract.setSaleState(false);
          } catch (err) {
              console.log(err);
          }
      }
  }

    async function connectAccounts() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
            setAccounts(accounts);
        }
    }

    async function toggleReveal(){
      if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          dinosquadAbi.abi,
          signer
        );
        try {
          let response = await contract.toggleReveal();
          console.log("response: ", response);
          console.log(response);
        } catch (err) {
          console.log("error: ", err);
        }
      }
    }

    async function mint(){
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              dinosquadAbi.abi,
              signer
            );
            try {
              let response = await contract.mint(1, { value: ethers.utils.parseEther("0.123") });
              console.log("response: ", response);
              console.log(response);
            } catch (err) {
              console.log("error: ", err);
            }
        }
    }

    async function wlMint(){
      if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          dinosquadAbi.abi,
          signer
        );
          const leafnodes = whitelistAdresses.map(addr => keccak256(addr));
          const merkletree = new MerkleTree(leafnodes, keccak256, {sortPairs: true});
          console.log(accounts);
          // let response = await contract.wlMint(merkleProof, 1, { value: ethers.utils.parseEther("0.123") });
          // console.log("response: ", response);
          // console.log(response);
      }
    }

    async function ownerOf(){
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              dinosquadAbi.abi,
              signer
            );
            try {
              let response = await provider.ownerOf(0);
              console.log("response: ", response);
              console.log(response);
            } catch (err) {
              console.log("error: ", err);
            }
        }
    }

    async function getBalance(){
      if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          dinosquadAbi.abi,
          signer
        );
        try {
          let balance = await provider.getBalance(contract.address);
          console.log(ethers.utils.formatEther(balance));
        } catch (err) {
          console.log("error: ", err);
        }
      }
    }

    async function withdraw(){
      if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          dinosquadAbi.abi,
          signer
        );
        try{
          let withdraw = await contract.withdraw();
          console.log(withdraw);
        } catch (err) {
          console.log(err);
        }
      }
    }

    async function kill(){
      if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          dinosquadAbi.abi,
          signer
        );
        try{
          let withdraw = await contract.kill();
          console.log(withdraw);
        } catch (err) {
          console.log(err);
        }
      }
    }

    return(
        <>
          <div className="first">
            1. Connect your Wallet
            <button onClick={connectAccounts}>Connect Wallet</button>
            Set Base Url through etherscan
          </div>
          <div className="second">
            2. Set Sale = true : 
            <button onClick={setSaleActive}>Sale Active</button>
            Then wait for transaction to complete
          </div>
          <div className="third">
            3. Mint a token
            <button className="mint" onClick={mint}>Mint</button>
            <button className="mint" onClick={wlMint}>WL Mint</button>
            Then go to opensea tesnet page and connect your wallet<br />
          </div>
          <div className="fourth">
            4. Reveal your token
            <button onClick={toggleReveal}>Reveal</button>
            Refresh your token metadata. The placeholder should be gone and your NFT should appear.
          </div>
          <div className="fifth">
            5. Check the contract balance and withdraw the money
            <button onClick={getBalance}>Get Balance</button>
            <button onClick={withdraw}>Withdraw</button>
          </div>
          <button onClick={setSaleInactive}>Sale Inactive</button>
          <button onClick={ownerOf}>Owner of 1</button>
          <button onClick={kill}>Kill</button>
          <ul className="notes">
            <li>I have to set a hashroot for the whitelisted addresses.</li>
            <li>I must set a price for the whitelist mint</li>
            <li>I have to generate all the images + metadatas and upload them to the IPFS (20$ per month with pinata)</li>
            <li>Should i deploy the contract and then transfer the ownership to you, or should you give me your private key so i can deploy it and grants you ownership instantly</li>
          </ul>
        </>
    )
}

export default SmartContract;