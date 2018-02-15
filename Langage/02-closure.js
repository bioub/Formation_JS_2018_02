function externe(msg) {
  // Closure : portée sauvegardée
  // ici msg est sauvegardée tant qu'on a accès à interne
  // 2 conditions pour que ça se produise :
  // - une fonction imbriquée dans une portée (fonction / block)
  // - la fonction imbriquée soit accessible en dehors
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');
const byeFct = externe('Bye');
console.log(typeof externe); // function
console.log(typeof interne); // undefined

helloFct(); // interne (affiche Hello)
byeFct(); // interne (affiche Bye)

// Sans Closure
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Avec Closure
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// Avec Closure (let depuis ES6 === portée de bloc)
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

/*
function createButton(value) {
  const element = document.createElement('button');
  element.innerText = value;

  // si value = objet volumineux (déclenche le GC)
  value = null;

  element.addEventListener('click', () => {
    console.log(value);
  });
}
*/
