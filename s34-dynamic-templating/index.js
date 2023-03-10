const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', {num: rand})
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Steph', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})

