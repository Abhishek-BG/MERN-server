//test/processData.js
const {getData,getRaw} = require('./utils');

function processData(){
    return `Processed:${getData()}`;
    //Processed real data;
}
function processRaw(){
    return getRaw();
}

module.exports={processData,processRaw};