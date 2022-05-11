// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import { IERC2981 } from "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract DinoSquad is Ownable, ERC721A, ReentrancyGuard, IERC2981 {
    bool public saleActive = false;
    bool public presaleActive = false;
    bool public isRevealed = false;
    uint256 private constant MAX_SUPPLY = 1;
    uint256 private constant MAX_PUBLIC_MINT = 2;
    uint256 private constant PRICE_PER_TOKEN = 0.123 ether;
    bytes32 public hashRoot;
    address private royalties;
    string private preRevealUrl;
    string private baseUri;
    mapping(address => uint8) private _minteds;
    mapping(address => uint8) private _wlMinteds;

    constructor(string memory _preRevealUrl) ERC721A("TestDino", "TSTDINO") {
        preRevealUrl = _preRevealUrl;
    }

    /*
        Here i can toggle ON / OFF the public Sale by setting the variable to TRUE / FALSE.
        Same for setPreSaleState(bool newState)
    */
    function setSaleState(bool newState) public onlyOwner {
        saleActive = newState;
    }

    function setPreSaleState(bool newState) public onlyOwner {
        presaleActive = newState;
    }

    function setBaseUri(string memory uri) public onlyOwner {
        baseUri = uri;
    }

    function toggleReveal() public onlyOwner{
        isRevealed = !isRevealed;
    }

    /*
        totalSupply() = Number of currently minteds nfts.
        I first check that the sale is active, then that the user does not mint more MAX_PUBLIC_MINT NFTs (2 actually)
        or if he already minted some, that the total isn't more than what's allowed, then that there is still enough 
        non-minteds NFTs for the transaction and finally that the price is correct.
        I then save inside an array that the sender has minted {numberOfTokens} NFTs, and proceed to mint.
    */
    function mint(uint8 numberOfTokens) public payable {
        uint256 ts = totalSupply();
        require(saleActive, "Sale must be active to mint tokens");
        require(_minteds[msg.sender] + numberOfTokens <= MAX_PUBLIC_MINT, "Max mint is 2 per wallet");
        require(ts + numberOfTokens <= MAX_SUPPLY, "Not enough tokens left");
        require(PRICE_PER_TOKEN * numberOfTokens == msg.value, "Ether value sent is not correct");
        _minteds[msg.sender] += numberOfTokens;
        _safeMint(msg.sender, numberOfTokens);
    }

    /*
        This functions makes it so there's a button that transfer 1 percent of the contract current balance to my wallet, and then
        99% of the wallet to your adress.
    */
    function withdraw() public onlyOwner {
        uint balance = address(this).balance;
        payable(0xB2CD18c595447b50C1581bfbEAebEADC4D8A6BD8).transfer(balance * 1 / 100);
        payable(msg.sender).transfer(address(this).balance);
    }

    /*
        The royaltyInfo function allows you to get your royalties on any sales of any NFT marketplace.
    */
    function royaltyInfo(uint256 _tokenId, uint256 _salePrice) external view returns (address, uint256 royaltyAmount) {
        _tokenId; // Unused parameter warning silencer
        royaltyAmount = (_salePrice / 100) * 5;  // Set the Royalty price
        return (royalties, royaltyAmount);
    }

    /*
        WhiteList Functions
    */
    // I first check that the PreSale is open, that use is minting an allowed amount of tokens,
    // that we do not exceed 5555 minteds tokens, that the price is correct and that the user is in the whitelist.
    // For the last check, we're using some merkletrees. It's pretty hard to explain so i'll leave a link there:
    // https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9
    // Basically i'm storing an array inside a hash so it costs less when it comes to contract deployment.
    // Then, i save inside an array that the sender has already minted {numberOfTokens} NFTs.
    function wlMint(bytes32[] calldata merkleproof, uint8 numberOfTokens) external payable returns (string memory) {
        uint256 ts = totalSupply();
        require(presaleActive, "Pre sale must be active to mint tokens");
        require(numberOfTokens <= MAX_PUBLIC_MINT, "Exceeded max token purchase");
        require(ts + numberOfTokens <= MAX_SUPPLY, "Purchase would exceed max tokens");
        require(PRICE_PER_TOKEN * numberOfTokens == msg.value, "Ether value sent is not correct");
        require(_verifyWhiteList(merkleproof, msg.sender), "User is not whitelisted");

        _wlMinteds[msg.sender] += numberOfTokens;
        _safeMint(msg.sender, 1);
        return "Minted";
    }

    // This function simply checks if the user is in the merkletree.
    function _verifyWhiteList(bytes32[] calldata _merkleproof, address _sender) private view returns(bool) {
        bytes32 leaf = keccak256(abi.encodePacked(_sender));
        return MerkleProof.verify(_merkleproof, hashRoot, leaf);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        if (isRevealed == true) {
            return string(abi.encodePacked(baseUri, Strings.toString(tokenId + 1), ".json")) ;
        } else {
            return preRevealUrl;
        }
    }

    function kill() external onlyOwner {
        selfdestruct(payable(msg.sender));
    }
}