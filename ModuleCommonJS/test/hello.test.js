const assert = require('assert');
const chalk = require('chalk');
const hello = require('../src/hello');

try {
  assert.strictEqual(hello('Romain'), 'Bonjour Romain !');
  console.log(chalk.green('Les tests de hello passent'));
}
catch (err) {
  console.log(chalk.red('Les tests de hello échouent'));
  console.log(chalk.red(err));
}
