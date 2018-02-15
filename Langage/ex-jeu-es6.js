// 1 - Method properties
const Random = {
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

};

const readline = require('readline');

// 2 - class
class Jeu {
  constructor(options = {}) {

    // 4 - Destructuring object (with default param)
    const {min = 0, max = 100} = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
  }

  static getClass() {
    return 'Jeu';
  }

  jouer() {

    if (this._essais.length) {
      // 5 - Template String / Template literal
      console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
    }

    this._rl.question(`Quel est l'entier ? `, (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();
    });
  }
}

const jeu = new Jeu();
jeu.jouer();
