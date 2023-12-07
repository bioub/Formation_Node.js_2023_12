import fs from "node:fs/promises";
import path from "node:path";
import { Buffer } from 'node:buffer';
import { URL } from 'node:url';
import md5 from "md5";
import { minify } from "terser";

const __dirname = new URL(".", import.meta.url).pathname;

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function emptyDir(dirPath) {
  await fs.rm(dirPath, { force: true, recursive: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);
  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let contentStr = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  contentStr = contentStr
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, contentStr);
}

try {
  await emptyDir(distPath);
  await Promise.all([buildJs(), buildHtml()]);
  console.log("build done");
} catch (err) {
  console.log('Error : ', err);
}



// pile d'appel
// ^
// |                                                [readFile][readFile]
// |[rm]                        [mkdir]             [buildJs           ]                [writeFile]
// |[emptyDir] ..⟳..            [task ] ..⟳..       [task              ]  ..⟳..         [task]
// +--------------------------------------------------------------------------------------------------> temps
// Console :
