const fs = require('fs');

fs.mkdir('tests', {recursive: true}, (err) => {
    console.log("I am in callback")
    if (err) throw err;
})
console.log("I come after callback")