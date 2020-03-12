const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const data = [];
var Sensor1value;
var Sensor2value;
var Sensor3value;

const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    { id: 'Sensor1', title: 'Sensor1' },
    { id: 'Sensor2', title: 'Sensor1' },
    { id: 'Sensor3', title: 'Sensor3' }
  ]
});

data.push({ Sensor1: '1', Sensor2: '2', Sensor3: '3' });
data.push({ Sensor1: '4', Sensor2: '5', Sensor3: '6' });
Sensor1value = data[0].Sensor1;
console.log(Sensor1value);
csvWriter
  .writeRecords(data)
  .then(() => console.log('The CSV file was written successfully'));
