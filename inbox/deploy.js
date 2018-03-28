const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'moment van ocean usage small record supreme odor aware edge hint subject',
  'https://rinkeby.infura.io/5IXwu9djqg8SaCLZFbiJ'
);

const web3 = new Web3(provider);