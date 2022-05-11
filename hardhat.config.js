require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

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
      accounts: ["2e5175664e5c1e8d132f5860ff811551e1f1cd2be6b6f6554837cebeb3e0e229"]
    },
  },
  etherscan: {
    apiKey: "WYIH8JQDZ3QUSZTCHRNQR7C6JBDBX6AGYB"
  },
  gasReporter: {
    currency: 'EUR',
  }
};
