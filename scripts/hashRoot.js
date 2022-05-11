const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

let whitelistAdresses = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
    "0x976ea74026e726554db657fa54763abd0c3a0aa9",
];

const leafnodes = whitelistAdresses.map(addr => keccak256(addr));
const merkletree = new MerkleTree(leafnodes, keccak256, {sortPairs: true});
const rootHash = merkletree.getRoot();
console.log(rootHash.toString('hex'));