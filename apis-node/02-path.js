const path = require('node:path');

console.log(path.join('..', 'apis-node', '.editorconfig'));

// resolve le chemin absolu par rapport au CWD
console.log(path.resolve('..', 'apis-node', '.editorconfig'));

console.log(path.join(__dirname, 'dist'));
console.log(path.resolve(__dirname, 'dist'));

console.log(path.parse(path.resolve('..', 'apis-node', 'monfichier.txt')));
console.log(path.extname(path.resolve('..', 'apis-node', 'monfichier.txt')));
