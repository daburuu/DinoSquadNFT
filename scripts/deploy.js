// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DinoSquad = await hre.ethers.getContractFactory("DinoSquad");
  const dinoSquad = await DinoSquad.deploy("https://ipfs.io/ipfs/QmaBbrTNPd8yUoY1f5a7GC5CY1pWQGiraz3tN74HTakx5i");

  await dinoSquad.deployed();

  console.log("DinoSquad deployed to:", dinoSquad.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
