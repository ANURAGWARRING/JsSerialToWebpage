//Converting to csv
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const dataJson = [];
var Sensor1value;
var Sensor2value;
var Sensor3value;

const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    { id: 'Sensor1', title: 'Sensor1' },
    { id: 'Sensor2', title: 'Sensor2' },
    { id: 'Sensor3', title: 'Sensor3' }
  ]
});

//Don't forget to change the port number

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
var SplitData;

// Read the port data
port.on('open', () => {
  console.log('serial port open');
});
parser.on('data', data => {
  console.log(data);
  SplitData = data.split(' ');
  //console.log(parseInt(SplitData[1])); //Split he string into int
  //console.log(parseInt(SplitData[4]));
  console.log(parseInt(SplitData[7]));
  dataJson.push({
    Sensor1: SplitData[1],
    Sensor2: SplitData[4],
    Sensor3: SplitData[7]
  });
  console.log(dataJson);
  csvWriter
    .writeRecords(dataJson)
    .then(() => console.log('The CSV file was written successfully'));
});

//Integrating both the codes
