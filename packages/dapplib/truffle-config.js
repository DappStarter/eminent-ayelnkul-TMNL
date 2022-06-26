require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth magnet coach hockey infant tail sunset'; 
let testAccounts = [
"0x17245d10b7f73cdb7cb5e63854df71eac86ccca33622ab41dc302ca0c73d567b",
"0x00116538a01c12e136043e18c2af6ce4b9cbf43ca53587df8e147e0ee8f6ca2d",
"0xfa8f60a3d62cf967435fec166f05276f297e56501e24b9762ad66d547a7e8e9e",
"0xc07af3accd073951123b31f0fb7eaed57bf2fa4a53d49e1ff780dc62e440a6ab",
"0x5431ad29e91b7f32b6c5b10063f13c1a73883cf07651d0eb7430f91f890cf7bd",
"0xecce0c16589271c42b608666c3b4e280fa235743c5687aedf69ed3ee36192a16",
"0x299b66c0a901c50378ea25de35e73d16479619e32af8d696070e0c34fea07b61",
"0x875d65ae7b251a5b973488dfa6a78346672c2a29a831b5253fbe7e1636bc5c15",
"0xd1ce9f7089f234675241f818d4c28261fa0177e9566d624558f11d2eab92c352",
"0xe9885bf7fb3896fcf3afc966a89c5553096dc3bc848845e5620a8d8d5985e9b3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

