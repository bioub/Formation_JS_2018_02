// 'use strict';

const contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
  // this === objet global en mode sloppy
  // this === undefined en mode strict
  console.log(`Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`);
}

hello('Jean', 'Eric');
hello.call(contact, 'Jean', 'Eric');
hello.apply(contact, ['Jean', 'Eric']);
hello.call(contact, ...['Jean', 'Eric']);