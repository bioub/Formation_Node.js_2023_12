// importe l'API readline de Node.js
const readline = require('readline');

// configure où doit être lu la ligne
const rl = readline.createInterface({
  input: process.stdin, // le clavier
  output: process.stdout, // le terminal
});

// la réponse est obtenu via un callback async
// le param du callback est de type string (à vous de le convertir)
function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    jouer(); // pour rejouer
    // quitter (quand on trouve le nombre) : rl.close();
  });
}

jouer();

// pile d'appel
// ^
// |                                    [question]                      [question]
// |[question]                          [jouer   ]                      [jouer   ]
// |[jouer   ] ..⟳..                    [task    ] ..⟳..                [task    ] ..⟳..
// +------------------------------------(Entrée)------------------------(Entrée)--------------> temps
// Console :
