const Observable = require('rxjs').Observable;

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

timeout(1000)
  .then(() => {
    console.log('dans 1s');
  });

function interval(delay) {
  return new Observable((observer) => {
    setInterval(observer.next.bind(observer), delay);
  });
}

interval(1000)
  .subscribe((val) => {
    console.log(`toutes les ${val}s`);
  });
