var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var levelOfAttention = 55;
var levelOfMeditation = 55;

setInterval(function(){ 
  levelOfMeditation = Math.random() * (0 - 255) + 255;
  levelOfAttention = Math.random() * (0 - 255) + 255;

  io.emit('attention', levelOfAttention);
  io.emit('meditation', levelOfMeditation);

  console.log('attention: ' + levelOfAttention);    
  console.log('meditation: ' + levelOfMeditation);    
}, 1000);
