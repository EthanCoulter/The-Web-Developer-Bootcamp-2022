const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("New request")
//     res.send('<h1>hello, new request response</h1>')
// })

app.get('/r/:subreddit', (req, res) => {
    res.send("THIS IS A new SUBREDDIT")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send("NOTHING FOUND")

    }
    res.send(`<h1>Search results for: ${q} </h1>`)
})

app.get('/', (req, res) => {
    res.send("this is home")
})

app.post('/cats', (req, res) => {
    res.send("POST REQUEST TO CATS")
})

app.get('/cats', (req, res) => {
    res.send("MEOW")
})
app.get('/dogs', (req, res) => {
    res.send("WOOF")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
