var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serialport = require('serialport');
var SerialPort = serialport.SerialPort
var sp = new SerialPort("/dev/cu.usbmodem1421", {
  baudrate: 9600,
  parser: serialport.parsers.raw
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('chat message', 'hi');
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
      io.emit('chat message', data);
      console.log(data.toString());
    });
  }
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


