const assert = require('assert');
const myMath = require('../src/my-math');

try {
  assert.strictEqual(myMath.sum(1, 2), 3);
  console.log('Les tests de my-math passent');
}
catch (err) {
  console.log('Les tests de my-math échouent');
  console.log(err);
}
