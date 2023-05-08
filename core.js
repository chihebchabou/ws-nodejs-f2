const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs');

// console.log(__filename);
// console.log(__dirname);

// const pathObj = path.parse(__filename);
// console.log(pathObj);

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// console.log('total memory:' + totalMemory / 1e9 + 'GB');
// console.log('free memory:' + freeMemory / 1e9 + 'GB');

// Sync
// const res = fs.readFileSync(path.join(__dirname, 'test', 'text.txt'), 'utf-8');
// console.log(res);

// Async
fs.readFile(path.join(__dirname, 'test', 'text.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('another task');
