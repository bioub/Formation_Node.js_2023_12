const fs = require("node:fs/promises");
const path = require('node:path');
const process = require('node:process');

// fs.readFile(path.resolve(__dirname, '.editorconfig'), (err, buffer) => {
//   if (err) {
//     console.log('Copy fail');
//     process.exit(1);
//   } else {
//     fs.writeFile(path.resolve(__dirname, '.editorconfig.copy'), buffer, (err) => {
//       if (err) {
//         console.log('Copy fail');
//         process.exit(1);
//       } else {
//         console.log('Copy done');
//       }
//     });
//   }
// });

// fs.readFile(path.resolve(__dirname, ".editorconfig"))
//   .then((buffer) => {
//     fs.writeFile(path.resolve(__dirname, ".editorconfig.copy"))
//       .then(() => {
//         console.log("Copy done");
//       })
//       .catch((err) => {
//         console.log("Copy fail");
//         process.exit(1);
//       });
//   })
//   .catch((err) => {
//     console.log("Copy fail");
//     process.exit(1);
//   });

fs.readFile(path.resolve(__dirname, ".editorconfig"))
  .then((buffer) => {
    return fs.writeFile(path.resolve(__dirname, ".editorconfig.copy"), buffer);
  })
  .then(() => {
    console.log("Copy done");
  })
  .catch((err) => {
    console.log("Copy fail", err);
    process.exit(1);
  });
