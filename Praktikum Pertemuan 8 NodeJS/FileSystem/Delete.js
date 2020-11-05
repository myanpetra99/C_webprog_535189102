var fs = require("fs");

console.log('WARNING! Akan mendelete file "input.txt"');
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
