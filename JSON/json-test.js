const fs = require('fs');

const JSONDataBuffer = fs.readFileSync('1-json.json');
const JSONData = JSONDataBuffer.toString();
const data = JSON.parse(JSONData);

const newData = {
    ...data,
    name: 'NewName',
    age: 34,    
} 

const newJSONData = JSON.stringify(newData);

fs.writeFileSync('1-json.json', newJSONData);

console.log(newJSONData);
