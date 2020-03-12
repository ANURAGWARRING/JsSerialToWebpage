const dataJson = [];
var Sensor1value;
var Sensor2value;
var Sensor3value;
var lastline;
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
  //console.log(data);
  SplitData = data.split(' ');
  //console.log(parseInt(SplitData[1])); //Split he string into int
  //console.log(parseInt(SplitData[4]));
  //console.log(parseInt(SplitData[7]));
  //dataJson.push({
  // Sensor1: SplitData[1],
  // Sensor2: SplitData[4],
  // Sensor3: SplitData[7]
  // });

  //lastline = dataJson[dataJson.length - 1];
  //console.log(lastline);
  //var textedJson = JSON.stringify(lastline);
  //console.log(textedJson);
});
dataJson.push({
  Sensor1: '1',
  Sensor2: '2',
  Sensor3: '3'
});

var textedJson = JSON.stringify(dataJson);
console.log(textedJson);
