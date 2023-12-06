import hello from './hello.js';
import { sum } from './my-math.js';

// inconvénient des modules ESM
// on a plus accès à exports, require, module, __filename et __dirname (mais des APIs sont en train d'arriver dans Node)
// depuis un module CommonJS on ne peut pas importer un module ESM
// cependant l'inverse est possible :
// un module ESM peut avec un import, importer un module CommonJS (exporté avec exports ou module.exports)
// en ESM au moment d'importe l'extension est obligatoire

// le système de module par défaut de Node reste CommonJS, si on ne fait rien :
// SyntaxError: Cannot use import statement outside a module

// Pour activer le nouveau système :
// - soit fichier par fichier, en utilisant l'extension .mjs
// - soit globalement avec "type": "module" dans le package.json

console.log(hello('Romain'));
console.log(sum(1, 2, 3, 4));



