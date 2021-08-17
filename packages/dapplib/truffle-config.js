require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin glove flower sell'; 
let testAccounts = [
"0x5e9017698db0ecfcb5d66b86785574e2258c292b4a1ceec1c166db191b3726fa",
"0x22152405535777301fd81f0f3db593629ecb6f76721eb0711faf25e443323c7d",
"0xdd73e1ac08fdd705969b1a7931916f5092ceb4c22e9bb8a1d202b70ba7eadb76",
"0x9178baee67731c2a7d5c949ea060435646e55eb9b79b71fa51164d48f3e27320",
"0x9f67cc86950539baa75910f1629b4682e90180a040252eb4d1ab9f5a20e63d06",
"0xaa36981e8489a2c4678360533fd044b64e9f9346d10ac88e93f36b36d70ea1f7",
"0xae0f8555db5314fee79e75c6de52c3a63ad691dee865e44185da52363f7e956b",
"0x85608ba7efd9b3ac2ee380e13bbe761446999390763365ed607bb99b548c3118",
"0x2a1b507d27bba9d3d113c4f8a167ef24a6db20f443ac6da07c3f90e2cc14bdbd",
"0xbbe67f135f745d748dae1a083207177bea9a737430179369012515ca0b47d0a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

