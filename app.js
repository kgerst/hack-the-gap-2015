var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serialport = require('serialport');
var SerialPort = serialport.SerialPort
var sp = new SerialPort("/dev/cu.usbmodem1421", {
  baudrate: 9600,
  // baudrate: 57600,
  parser: serialport.parsers.readline("\n")
});

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

sp.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    console.log('open');
    io.emit('chat message', 'serial port connection is open');
    sp.on('data', function(data) {      
      var inputString = data.toString();
      if (inputString.length > 1) {
        var values = inputString.split(',');      
        var signalStrength = values[0];
        console.log('signalStrength: ' + Number(signalStrength));    

        if (signalStrength == 0) {
          var levelOfAttention = values[1];
          var levelOfMeditation = values[2];

          io.emit('attention', levelOfAttention);
          io.emit('meditation', levelOfMeditation);
          
          console.log('attention: ' + levelOfAttention);    
          console.log('meditation: ' + levelOfMeditation);    
        }
      }
    });
  }
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
