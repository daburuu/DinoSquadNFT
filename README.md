
# DinoSquad

Hi !  
I'm David, the developer of this project.  

First of all, if you have any issue or if you ever need me for something, you can contact me there:  
✉️ lageiste.david@gmail.com.  
📱 06.68.82.78.97  

## Stack
[![Generic badge](https://img.shields.io/badge/ReactJS-18.1.0-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hardhat-2.9.3-yellow.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Solidity-0.8.11-black.svg)](https://shields.io/)

## Installation
Make sure you have **Node 18.0.0** installed on your computer.

#### Development

Simply run:
```shell
npm install
npm run start
```

Then access https://localhost:3000. The website should appear.

#### Production

Simply run
```shell
npm install
npm run build
```

Then configure your host manager to use **/dist/index.html** as root web page.

## How it works

### ReactJS
The whole point of React is that you build **component** for your website.  
The first file that you can take a look at is **/src/index.js**. 
This file contains a router that contains 2 routes: 
- **"/"** which displays the **App** component
- **"/mint"** which displays the **Mint** component.

#### App component
The app component is the main page (also Landing page) of the website.  
It only includes some other components: **"Header", "Welcome", "Roadmap", "Gallery", "Market", "Faq", "Merch", and "Footer".**  
Every component is a part of the website, and they're all in their order of appearance.  
Since it's a static website without any back-end interactions, the code inside theses components is almost only **JSX** (which looks like HTML with variables).  
Every component has their own **.scss** file. This is basically **css** file in which you can nest selectors so it's easier and faster to develop.

#### Mint component
This is the page where users links their Metamask to the website and that allow them to **interact with the Smart Contract**.  
First, we have to **connect to the contract** so we can then access his functions. This is how we do it:
```
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
this.contract = new ethers.Contract(
    contractAddress,
    dinoSquadAbi.abi,
    signer
);
```

Then, everytime we want to call a function from the function, you just access contract.YOUR_FUNCTION();  
Let's say you want to access the **withdraw** function:
```
const response = await contract.withdraw();
```

###  Solidity
Solidity is the language in which the Smart-Contract is developed.  
It looks a lot like TypeScript.  
You can find the smart-contract inside the **/contract** folder. Every function and the way it works is described in the comment right above it.