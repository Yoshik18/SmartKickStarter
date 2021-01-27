const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/campaignFactory.json');

const provider = new HDWalletProvider(
   'kick warfare purse manage width dance buyer elegant accuse else slam build',
    'https://rinkeby.infura.io/v3/3854c7d590e3409ba1e73c58f60f5595'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy account ',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode, arguments: ['Hi there!!']})
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};
deploy();