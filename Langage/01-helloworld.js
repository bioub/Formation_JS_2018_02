// Module JavaScript : créer une portée de fichier
// Dans Node.js : Module CommonJS
// (function (exports, require, module, __filename, __dirname) {
const sum = (a, b) => a + b;

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
// });


var a = 10;

setTimeout(() => {
  a = 20;
}, 0);

console.log(a);
