// Reprendre le code de ex-jeu.js

// Exercice 1
// En vous inspirant de MyMath de 08-object.js
// Créer un namespace object Random qui regroupe
// les 4 fonctions (de la correction)
// On écrira Random.getRandomInt(0, 100) pour l'appel

// Exercice 2
// Créer un classe Jeu dont le constructeur
// va créer les 3 propriétés suivantes :
// - rl (reprendre le code de ex-jeu)
// - entierAlea (créé à partir de Random)
// - essais (tableau vide)
// Faire de la fonction jouer une méthode de Jeu
// et donc passer par this. pour accéder aux valeurs de rl, entierAlea et essais
// A ce stade le constructeur ne prend pas de paramètre
// const game = new Jeu();
// game.jouer()

// Exercice 3
// Modifier le constructeur de Jeu
// de sorte à ce qu'on puisse lui passer un objet avec des paramètres
// min et max (il n'y a qu'un argument dans le constructeur de type object)
// const game = new Jeu({ min: 0, max: 100});
// game.jouer()

// Prévoir des valeurs par défaut pour min et max
// Prévoir qu'on puisse appeler Jeu sans paramètre comme dans l'ex 2
