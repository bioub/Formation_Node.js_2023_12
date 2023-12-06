const prenoms = ['Romain', 'Toto'];

/** @param {string} name */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
