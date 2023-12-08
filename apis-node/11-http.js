const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method + " " + req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

// error n'est pas dans doc http mais dans net
// car le server http hérite de celui de net
server.on("error", (err) => {
  console.log(err);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
