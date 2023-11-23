const http = require("http");

const hostname = "localhost";
const port = 3333;

const server = http.createServer((request, response) => {
    response.setHeader("Content-type", "text/plain");
    response.end("hello world");
});

server.listen(port, hostname, () => {
    console.log('SERVIDOR RODANDO');
});

