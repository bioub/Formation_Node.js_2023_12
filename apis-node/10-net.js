const net = require('node:net');

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('Client connected');
  socket.pipe(process.stdout);
});
server.on('error', (err) => {
  console.log('Error', err);
});
// server.on('listening', () => {
//   console.log('Server started on port 8080');
// });

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
