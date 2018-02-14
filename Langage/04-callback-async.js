setTimeout(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  console.log(2);
}, 500);

setTimeout(() => {
  console.log(3);
}, 1000);

console.log('fin');

// pile d'appel
// ^
// |
// |
// |
// |
// |                                                 idle  log(2)        log(1)   log(3)
// |setTimeout - setTimeout - setTimeout - log(fin) ...... =>     ...... =>     - =>
// +--------------------------------------------------------------------------------> temps
// output :                                fin             2             1        3
// file d'attente :
