var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var express = require('express');
var app = express();

server.listen(process.env.PORT || 3000);

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');
});
