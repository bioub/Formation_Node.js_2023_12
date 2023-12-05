const prenoms = ['Romain', 'Toto'];

function hello(name) {
  return `Hello ${name}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
