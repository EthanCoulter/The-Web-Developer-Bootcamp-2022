const fs = require('fs');
const folderName = process.argv[2] || 'Project';
// fs.mkdir('tests', {recursive: true}, (err) => {
//     console.log("I am in callback")
//     if (err) throw err;
// })
// console.log("I come after callback")
try {
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`, "")
    fs.writeFileSync(`${folderName}/app.js`, "")
    fs.writeFileSync(`${folderName}/styles.css`, "")
} catch (e) {
    console.log("SOMETHING WENT WRONG")
    console.log(e)
}
