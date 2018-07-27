
var app = require('./config/server');

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){

  socket.on('chat', function(msg){
    console.log('message: ' + msg);
  });

});


http.listen(8080, function(){
  console.log("Server online");
})
