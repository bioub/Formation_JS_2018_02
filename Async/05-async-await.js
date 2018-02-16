const fs = require('fs-extra');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(file, msg);
}

async function logs() {

  try {
    try {
      const stats = await fs.stat(logDir);
    }
    catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
      await fs.mkdir(logDir);
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.log('Logs done');
  }
  catch (err) {
    console.log(err);
  }

}

logs();
