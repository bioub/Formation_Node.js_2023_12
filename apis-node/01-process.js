const process = require('node:process');

// node 01-process.js --name Romain
// [
//   '/Users/romain/.nvm/versions/node/v20.9.0/bin/node',
//   '/Users/romain/Desktop/Formation-Node/apis-node/01-process.js',
//   '--name',
//   'Romain'
// ]
// Libs :
// yargs, minimist, commander, (inquirer)
console.log(process.argv);

// CWD : Current Working Dir
// Le dossier dans lequel se trouve le terminal
// Quand on fait référence à un fichier dans Node
// de façon relative (../monfichier.txt ou juste monfichier.txt)
// le chemin relatif dépend du CWD
console.log(process.cwd());

// équivalent d'un cd dans le terminal
process.chdir(__dirname);
console.log(process.cwd());

// Les variables d'environnement process.env
console.log(process.env.PATH);

// Platform
console.log(process.platform); // win32, linux, darwin (macos)

// kill le programme
process.exit(0) // sans erreur
process.exit(1) // avec erreur
