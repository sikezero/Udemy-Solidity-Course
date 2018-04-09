import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xfE5C233AB7D8C1B78e290150581e350Fc00D8B4a'
);

export default instance;