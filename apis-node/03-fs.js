const fs = require('node:fs');
const path = require('node:path');

// Synchrone
const buffer = fs.readFileSync(path.resolve(__dirname, '.editorconfig'))
console.log(buffer.toString('utf-8'));

// Asynchrone
// la plupart des callbacks de Node sont normé
// - toujours le dernier param
// - le callback a 1 ou 2 param (erreur et valeur de retour (si concerné))
fs.readFile(path.resolve(__dirname, '.editorconfig'), (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
