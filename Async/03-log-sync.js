const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(file, msg);
}

try {
  try {
    fs.statSync(logDir);
  }
  catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    fs.mkdirSync(logDir);
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.log('Logs done');
}
catch (err) {
  console.log(err);
}
