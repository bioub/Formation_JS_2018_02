const assert = require('assert');
const hello = require('../src/hello');

try {
  assert.strictEqual(hello('Romain'), 'Bonjour Romain !');
  console.log('Les tests de hello passent');
}
catch (err) {
  console.log('Les tests de hello échouent');
  console.log(err);
}
