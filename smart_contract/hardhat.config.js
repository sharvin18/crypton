require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ljfkynSlyhhYoTYuzvydU3oUqAVv5GaO',
      accounts: ['d95c449b244914ae4a2e8ddcf08540fdb84bd9be6b47357152524d10a6c5da04'],
    },
  },
};