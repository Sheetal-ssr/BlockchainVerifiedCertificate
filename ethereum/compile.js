const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');

fs.removeSync(buildPath);

const Certipath = path.resolve(__dirname,'contracts','certificate.sol');

const source = fs.readFileSync(Certipath,'utf8');

const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for (let c in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, c.replace(':','') + '.json'),
        output[c],
    );
}
