// En JS on manipule des objets déjà existants

// définis dans le langage
console.log(typeof Math); // object

// définis dans Node.js
console.log(typeof process); // object

// définis dans le navigateur
console.log(typeof document); // object (dans le navigateur)

// définis dans le navigateur et Node.js
console.log(typeof console); // object

// un objet en JS est un système clé / valeur
// dans d'autres langage, équivalent à :
// Map, HashTable, dict, tableau associatif

// soit l'objet Math, la méthode sum n'existe pas
console.log(Math.sum); // undefined

// On peut étendre un objet (ajouter une clé)
// Bonne pratique : il vaudrait mieux créer un nouvel
// objet (ex MyMath) plutôt que d'étendre un objet standard
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// On peut modifier les valeurs
console.log(Math.sum('1', '2')); // 12
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// On peut supprimer les clés
delete Math.sum;
console.log(Math.sum); // undefined

// Test unitaire de sum :
const assert = require('assert');
const sum = (a, b) => a + b;
assert.strictEqual(sum(1, 2), 3);

// Test unitaire de pileOuFace :
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';
const backupRandom = Math.random;
Math.random = () => 0.75;
assert.strictEqual(pileOuFace(), 'pile');
Math.random = () => 0.25;
assert.strictEqual(pileOuFace(), 'face');
Math.random = backupRandom;

// 2 opérateurs pour accéder aux membres d'un objet
console.log(Math.PI); // 3.141592653589793
console['log'](Math['PI']); // 3.141592653589793
var key = 'PI';
console.log(Math[key]);
var key = 'E';
console.log(Math[key]);

// Si besoin de créer des nouveaux objets, 3 cas possible
// 1 - si le besoin est ponctuel (ce type d'objet n'est créé qu'un seule fois)
// ou si l'objet est très simple à créer
// => object literal

// 2 - si le besoin est récurrent (ce type d'objet est utilisé régulièrement)
// mais sans méthodes
// => factory function

// 3 - si le besoin est récurrent (ce type d'objet est utilisé régulièrement)
// mais avec méthodes
// => constructor function

// object literal (créé une seule fois)
const config = {
  dbHost: 'localhost',
  dbName: 'mabase',
  dbPort: 27017,
};

// object literal (simple à créer)
const coordsA = {x: 10, y: 20};
const coordsB = {x: 30, y: 40};

// on peut boucler sur les clés d'un objet
for (let key in config) {
  console.log('Key : ', key);
  console.log('Value : ', config[key]);
}

// On peut sérialiser un objet (le transformer en une string)
const json = JSON.stringify(config);
console.log(json); // {"dbHost":"localhost","dbName":"mabase","dbPort":27017}

const configFromJson = JSON.parse(json);
console.log(configFromJson.dbHost);
// JSON ne sérialise que :
// number, boolean, string
// les syntaxes litérales : object {}, tableaux [], regexp /[a-b]/
// PAS de fonction, PAS de type, PAS de commentaires

// => factory function
const coords3dFactory = function(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
    getType: function() {
      return 'coord3d';
    }
  };
};

const coords3dFactoryES6 = (x = 0, y = 0, z = 0) => ({x, y, z});

const coords3dA = coords3dFactory(10);
console.log(coords3dA); // { x: 10, y: 0, z: 0 }

const coords3dB = coords3dFactory(10, 20);
console.log(coords3dB); // { x: 10, y: 20, z: 0 }

console.log(coords3dA.getType() === coords3dB.getType()); // true
console.log(coords3dA.getType === coords3dB.getType); // false (la fonction est dupliqué)

// => constructor function
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  return `Bonjour je m'appelle ${this._prenom}`;
};

const romain = new Contact('Romain');
const edouard = new Contact('Edouard');

console.log(typeof romain); // object
console.log(romain._prenom); // 'Romain'
console.log(romain.hello()); // 'Bonjour je m'appelle Romain'
console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.hello === edouard.hello); // true (la fonction n'est pas dupliqué)

console.log(romain instanceof Contact); // true

console.log(Contact.getClass());
