// Programmation fonctionnelle
// les appels de fonctions remplacent un algo
// grace à filter, map, forEach... (ES5)
[1, 2, 3, 4]
  .filter((elt) => elt % 2 === 0)
  .map((elt) => elt ** 2)
  .forEach((elt, i, array) => {
    console.log(elt);
  });

console.log('fin');

// pile d'appel
// ^
// |
// |
// |
// |                              log(4)   log(16)
// |=> - => - => - =>   => - =>   =>     - =>
// |filter            - map     - forEach          - log(fin)
// +-----------------------------------------------------------> temps
// output :                       4        16        fin


const sum = [1, 2, 3, 4].reduce((acc, elt) => acc + elt, 0);
console.log(sum); // 10
