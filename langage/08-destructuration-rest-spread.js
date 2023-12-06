// destructuration

const letters = ['A', 'B', 'C'];
console.log(letters.join(' - '));

const fullName = 'Romain Bohdanowicz';

// const tmp = fullName.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

//    [ 'Rom' , 'Boh' ]
const [ prenom, nom, suffix = '' ] = fullName.split(' ');

console.log(prenom, nom);

const name = 'Romain';
const user = {
  name, // name: name
};

const coords = { x: 0, y: 1 };

// const varX = coords.x;
// const varY = coords.y;

//    { x: 0   , y: 1    }
const { x: varX, y: varY, z: varZ = 0 } = coords;

const { x, y, z = 0 } = coords;

// REST et SPREAD

// REST array
// conversion de syntaxe
// d'une liste de valeurs -> un tableau

//          (1, 2, 3, 4, 5)
function sum(a, b, ...nbs ) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

const nbs = [1, 2, 3, 4, 5]

//    [1 , 2   , 3, 4, 5 ]
const [un, deux, ...suite] = nbs;

// SPREAD array
// conversion de syntaxe
// un tableau -> d'une liste de valeurs

//               [1, 2, 3, 4, 5]
function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

console.log(multiply(...nbs));

const cloneNbs = [...nbs];
const pushNewNbs = [...nbs, 6];

// REST et SPREAD object (ES2018)
const cloneCoords = {...coords};
const coords3d = {...coords, z: 3};

const { z: myZValue, ...coords2d } = coords3d;
