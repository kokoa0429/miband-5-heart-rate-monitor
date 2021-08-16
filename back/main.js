const ws = require('ws');
const fs = require('fs')
const express = require("express")
const http = require("http")
const app = express();
app.use(express.static(__dirname + '/static/'));
const server = http.createServer(app);
const wss = new ws.Server({server: server});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        wss.clients.forEach(function each(client) {
            client.send(message.toString());
        });
    });
});
server.listen(8080);