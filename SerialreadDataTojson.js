//Don't forget to change the port number

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data

parser.on('data', data => {
  console.log(data[1]);
});

//Converting to json array
while (true) {}
