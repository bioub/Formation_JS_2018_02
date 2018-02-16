const assert = require('assert');
const chalk = require('chalk');
const myMath = require('../src/my-math');

try {
  assert.strictEqual(myMath.sum(1, 2), 3);
  console.log(chalk.green('Les tests de my-math passent'));
}
catch (err) {
  console.log(chalk.red('Les tests de my-math échouent'));
  console.log(chalk.red(err));
}
