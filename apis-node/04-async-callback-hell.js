const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

// Synchrone
try {
  const buffer = fs.readFileSync(path.resolve(__dirname, '.editorconfig'))
  fs.writeFileSync(path.resolve(__dirname, '.editorconfig.copy'), buffer)
  console.log('Copy done');
} catch (err) {
  console.log('Copy fail');
  process.exit(1);
}

// pile d'appel
// ^
// |
// |
// |[readFileSync XXXXXXXXXXXXXXXXXX][writeFileSync XXXXXXXXXXXXXXXXXX][log]
// +------------------------------------------------------------------------------> temps
// Console :                                                           Copy done


// Asynchrone
// la plupart des callbacks de Node sont normé
// - toujours le dernier param
// - le callback a 1 ou 2 param (erreur et valeur de retour (si concerné))
fs.readFile(path.resolve(__dirname, '.editorconfig'), (err, buffer) => {
  if (err) {
    console.log('Copy fail');
    process.exit(1);
  } else {
    fs.writeFile(path.resolve(__dirname, '.editorconfig.copy'), buffer, (err) => {
      if (err) {
        console.log('Copy fail');
        process.exit(1);
      } else {
        console.log('Copy done');
      }
    });
  }
});



// pile d'appel
// ^
// |
// |                                 [writeFile]                      [log]
// |[readFile] ..⟳..                 [task     ] ..⟳..                [task]
// +--------------------------------------------------------------------------------> temps
// Console :                                                          Copy done
