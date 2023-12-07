const fs = require('node:fs')
const { createGzip } = require('node:zlib')

const readStream = fs.createReadStream('big-file.html');
const writeStream = fs.createWriteStream('big-file.html.gzip');

// cat big-file.html | gzip > big-file.html.gzip
readStream.pipe(createGzip()).pipe(writeStream);

readStream.on('open', () => {
  console.log('big-file opened');
})

readStream.on('data', (buffer) => {
  console.log(buffer.length);
  console.log('big-file read data');
})

readStream.on('close', () => {
  console.log('big-file closed');
})

