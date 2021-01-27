import web3 from './web3';
import CampaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xC00E31dEbcc4d28923dccF6862996F2c5B383277'
);
export default instance;
    