const { readdir } = require('fs');

readdir(__dirname, (err, files) => {
  if (err) {
    return console.log(err);
  }
  files.filter((file) => file.endsWith('test.js'))
       .forEach((file) => require('./' + file));
});
