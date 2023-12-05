[123, 456].forEach((nb) => console.log(nb));

setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Me répondre dans le chat,
// dans quel ordre vont s'afficher les lettres A, B, D, E, F ?

// un callback est une fonction qu'on défini mais qui sera appelée
// indirectement (ce n'est nous qui l'appelons)

// pile d'appel
// ^
// |
// |                           [lg]                      [lg]
// |[st][st][st][st][lg] ..⟳.. [taskB] ..⟳..             [taskA] ..⟳.. [taskD]  ..⟳..
// +---------------------------4ms-----5ms---------------500ms----------------------------> temps
// Console :        E          B

// File d'attente de timers (0ms) : taskB
// File d'attente de timers (4ms) :
// File d'attente de timers (499ms) : taskA
// File d'attente de timers (500ms) :
// File d'attente de timers (500.001ms) : taskD
// File d'attente de timers (501ms) :


// Dans Node.js (qui est programme écrit en C++)
// On peut exécuter du JS grace au moteur JavaScript (V8)
// Dans le code C++ de Node.js on retrouve une boucle
// appelée Boucle d'événémenent (Event Loop)
// qui ressemble à ça :
// do {
//   executeJSStack();
// } while (thereIsTaskToCall);

// Jake Archibald - In The Loop (JSconf.Asia 2018)
//
