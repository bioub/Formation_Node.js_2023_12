// Exercice
// Importer getRandomInt en CommonJS
// Remplacer exports par Jeu
const readline = require('readline');
const { getRandomInt } = require('./random');
const chalk = require('chalk');

module.exports = class Jeu {
  essais = [];

  constructor(options = {}) {
    // const min = (options.min !== undefined) ? options.min : 0;
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    // const { min = 0, max = 100 } = options;

    this.rl = readline.createInterface({
      input: process.stdin, // le clavier
      output: process.stdout, // le terminal
    });
    this.entierAlea = getRandomInt(min, max);
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}
