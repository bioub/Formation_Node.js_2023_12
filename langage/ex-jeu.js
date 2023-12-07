function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// importe l'API readline de Node.js
const readline = require('readline');



// la réponse est obtenu via un callback async
// le param du callback est de type string (à vous de le convertir)
function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà saisi ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

// configure où doit être lu la ligne
const rl = readline.createInterface({
  input: process.stdin, // le clavier
  output: process.stdout, // le terminal
});
const essais = [];
const entierAlea = getRandomInt(0, 100);
jouer();

// pile d'appel
// ^
// |                                    [question]                      [question]
// |[question]                          [jouer   ]                      [jouer   ]
// |[jouer   ] ..⟳..                    [task    ] ..⟳..                [task    ] ..⟳..
// +------------------------------------(Entrée)------------------------(Entrée)--------------> temps
// Console :
