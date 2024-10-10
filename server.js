const http = require("node:http");

const server = http.createServer();

server.on("request", (request, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

server.listen(8080);
