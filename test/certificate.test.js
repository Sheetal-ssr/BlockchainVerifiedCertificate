const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const certificate = require('../ethereum/build/Certificate.json');



let accounts;
let output;
let hash;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();

    Certificate = await new web3.eth.Contract(JSON.parse(certificate.interface))
    .deploy({data: certificate.bytecode})
    .send({from: accounts[0], gas: '1000000'});

    await Certificate.methods.registerNew("Yatharth","Arora","8826313566","Testing").send({
        from: accounts[0],
        gas: '1000000'
    });

    
    
})

describe('Certificate Generator', () => {

    it('deploys a smart Contract', () => {
        assert.ok(Certificate.options.address);
    });

    it('Validate using hash', async () => {
    
       hash = await Certificate.methods.hash().call();
       await Certificate.methods.validateByHash(hash).send({
           from: accounts[0]
       });
       output = await Certificate.methods.output().call();
       assert.equal(output,1);
    });

    it('Validate using Details', async() => {
        
        await Certificate.methods.validateByDetails("Yatharth","Arora","8826313566","Testing").send({
            from: accounts[0],
            gas: '1000000'
        });

        output = await Certificate.methods.output().call();
        assert.equal(output,1);
    });

    it('Cannot Validate fake details', async() => {
        await Certificate.methods.validateByDetails("Yatharth","Taneja","8826313566","Testing").send({
            from: accounts[0],
            gas: '1000000'
        });

        output = await Certificate.methods.output().call();
        assert.equal(output,0);
    })
    
});