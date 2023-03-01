const port = 3003;

// Dependências

const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(port, function() {
    console.log(`Backend is running on port 3003.`)
});

module.exports = server;