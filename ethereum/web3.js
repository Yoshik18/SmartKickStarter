import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //Running on browser with metamask
    web3 = new Web3(window.web3.currentProvider);

}
else{
    //Running on server without or without metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/3854c7d590e3409ba1e73c58f60f5595'
    );
    web3 = new Web3(provider);
}
export default web3;
