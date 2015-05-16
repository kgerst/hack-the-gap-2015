
var serialport = require('serialport');
var SerialPort = serialport.SerialPort
var sp = new SerialPort("/dev/cu.usbmodem1421", {
  baudrate: 9600,
  parser: serialport.parsers.raw
});

sp.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    console.log('open');
    sp.on('data', function(data) {
      console.log(data.toString());
    });
  }
});
