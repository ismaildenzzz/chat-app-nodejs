var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('socket.io').listen(server);
var path = require('path');



server.listen(process.env.PORT || 3000);



app.get('/',function(req,res){
    res.sendFile(__dirname +'/views/index.html');
});
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));

