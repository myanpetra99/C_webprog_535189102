var fs = require("fs");
var data = fs.readFileSync('input.txt');
// Asynchronous read
fs.readFile('input.txt', function (error, data) {
   if (error) {
      return console.error(error);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
