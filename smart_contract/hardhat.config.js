require("@nomiclabs/hardhat-waffle");

module.exports = {

  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: "https://eth-ropsten.alchemyapi.io/v2/r-NVmHyUefV1Vs7C9NveynAYpGD7iJ0i",
      accounts: ["0eacb7dcad71df99abd8a01b7bb94155c0f497df90fc902e2aa6301d35745bc6"]
    }
  }

}
