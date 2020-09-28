import web3 from './web3';
import Match from './build/Certificate.json';

const instance = new web3.eth.Contract(JSON.parse(Match.interface),'0x1647fA9e761f285c6801a5dd51e72278B78C50dF');

export default instance;