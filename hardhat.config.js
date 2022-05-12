require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 1000000
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/9ffpV_QJv5bHTtDQbBdmll65LEWTTKfH",
      accounts: [privateKey]
    },
  },
  etherscan: {
    apiKey: "WYIH8JQDZ3QUSZTCHRNQR7C6JBDBX6AGYB"
  },
  gasReporter: {
    currency: 'EUR',
  }
};
