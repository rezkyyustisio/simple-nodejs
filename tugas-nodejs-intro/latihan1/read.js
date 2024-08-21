const fs = require('node:fs');
fs.readFile('/simple-node-js/tugas-nodejs-intro/latihan1/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});