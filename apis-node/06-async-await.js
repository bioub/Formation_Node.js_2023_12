const fs = require("node:fs/promises");

async function copy() {
  try {
    const buffer = await fs.readFile(path.resolve(__dirname, '.editorconfig'))
    await fs.writeFile(path.resolve(__dirname, '.editorconfig.copy'), buffer)
    console.log('Copy done');
  } catch (err) {
    console.log('Copy fail');
    process.exit(1);
  }
}

copy();

// pile d'appel
// ^
// |
// |                                 [writeFile]                      [log]
// |[readFile] ..⟳..                 [task     ] ..⟳..                [task]
// +--------------------------------------------------------------------------------> temps
// Console :                                                          Copy done
