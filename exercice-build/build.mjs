import fs from "node:fs/promises";
import path from "node:path";
import { Buffer } from 'node:buffer';
import { URL } from 'node:url';
import crypto from 'node:crypto';
import { minify } from "terser";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const __dirname = new URL(".", import.meta.url).pathname;


const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");

async function emptyDir(dirPath) {
  await fs.rm(dirPath, { force: true, recursive: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let contentBufferOrStr = Buffer.concat(buffers);

  if (argv.minify) { // si --minify
    const output = await minify(contentBufferOrStr.toString('utf-8'));
    contentBufferOrStr = output.code;
  }

  let filename = 'app.js';

  if (argv.hash) { // si --hash
    const checksum = crypto.createHash('md5').update(contentBufferOrStr).digest("hex")
    filename = filename.replace('.js', `.${checksum}.js`);
  }

  await fs.writeFile(path.resolve(distPath, filename), contentBufferOrStr);

  return filename;
}

async function buildHtml(filename) {
  let contentStr = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  contentStr = contentStr
    .replace(
      '<script src="./js/horloge.js"></script>',
      `<script src="./${filename}"></script>`
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, contentStr);
}

try {
  await emptyDir(distPath);
  const filename = await buildJs();
  await buildHtml(filename);
  console.log("build done");
} catch (err) {
  console.log('Error : ', err);
  process.exit(1);
}



// pile d'appel
// ^
// |                                                [readFile][readFile]
// |[rm]                        [mkdir]             [buildJs           ]                [writeFile]
// |[emptyDir] ..⟳..            [task ] ..⟳..       [task              ]  ..⟳..         [task]
// +--------------------------------------------------------------------------------------------------> temps
// Console :
