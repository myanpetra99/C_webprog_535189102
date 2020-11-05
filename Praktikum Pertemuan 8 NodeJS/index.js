var fs = require('fs')

fs.readFile('input.txt', function(err, data){
    if(err){
        console.log(err, stack);
        return;
    }
    console.log('Async read:', data.toString());
});

var data = fs.readFileSync('input.txt');
console.log('sync read:' + data.toString());

console.log('Program ended')