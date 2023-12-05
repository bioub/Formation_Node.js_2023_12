// Les JS sont extensibles
// on peut y ajouter des clés/valeurs

console.log('Math.sum', Math.sum); // undefined
Math.sum = (a, b) => a + b;

console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3
delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// ATTENTION : étendre des objets qu'on pas créé soi-même est une TRES MAUVAISE PRATIQUE

// l'API object de node mentionne ces concepts
// keys, extensions, property
const coords = { x: 1, y: 2 };
console.log('Object.keys(coords)', Object.keys(coords)); // ['x', 'y']

// Moyen plus fin d'étendre un object (avec writable, enumerable et configurable)
Object.defineProperty(coords, 'z', {
  value: '3',
  writable: true,
  // enumerable: false,
  // configurable: false,
});

Object.isExtensible(coords);

// 2 systèmes pour créer des objets
// Object literal {}
// Use case
// - un objet créé ponctuellement (1 seul instance)
// - si l'object est créé plusieurs fois, ne pas y mettre de méthode/function

const romain = {
  name: 'Romain',
  age: 38,
  // hello() {} // il y a 2 méthodes hello créée (en mémoire)
};

console.log(romain.name); // Romain
console.log(romain.age); // Romain

const toto = {
  name: 'Toto',
  age: 23,
  // hello() {} // il y a 2 méthodes hello créée (en mémoire)
};

// namespace Object
// devenu une mauvaise avec les modules (CommonJS/ESM)
const MyMath = {
  sum(a, b) {
    return a + b;
  }
};

console.log(MyMath.sum(1, 2)); // 3

// constructor
// des objects créés plusieurs fois avec des méthodes

// function Contact () {
//   this.name = 'Romain';
//   // this.hello = function() {}; dupliquée dans chaque objet
// }
// Contact.prototype.hello = function() {
//   return `Hello ${this.name}`;
// };

class Contact {
  constructor() {
    this.name = 'Romain';
    // this.hello = function() {}; dupliquée dans chaque objet
  }
  hello() {
    return `Hello ${this.name}`;
  }
}


const contact = new Contact();
console.log(contact.name); // Romain
console.log(contact.hello()); // Hello Romain
// delete contact.name;
// console.log(contact.name); // undefined
