const express = require('express');
const http = require('http');

var app = express();
var server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

server.listen(PORT, function () {
    console.log('Express server is running on port ' + PORT);
});