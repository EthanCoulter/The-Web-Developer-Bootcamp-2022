const express = require('express');
const app = express();
const path = require('path');
const {v4: uuidv4} = require('uuid');
uuidv4();
const methodOVerride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuidv4(),
        username: "todd",
        comment: 'Lol youre funny'

    },
    {
        id: uuidv4(),
        username: "George",
        comment: 'Not funny'

    },
    {
        id: uuidv4(),
        username: "Lola",
        comment: 'Why would you post this'

    },
    {
        id: uuidv4(), 
        username: "Wooth",
        comment: 'IDK what I am doing'

    }
]

app.get('/comments', (req, res) => {
    console.log(comments)
    res.render('comments/index', {comments})
})
app.get('/comments/new', (req, res) => {
    res.render("comments/new")
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', {comment})
    // console.log(id)
    // res.send({status: 200, data: {comment: comment.comment}})
})

app.get('/commnets/:id/edit',(req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment})
})

app.delete('/comments/:id', (req,res) => {
    const { id } = req.params;
    // const comment = comments.find(c => c.id === id)
    comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCom = req.body.comment;
    const curComment = comments.find(c => c.id === id)
    curComment.comment = newCom;
    res.redirect('/comments')
})


app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({ username, comment, id: uuidv4()})
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok here are your ${qty} ${meat}`)
})
app.listen(3000 , () => {
    console.log("ON PORT 3000")
})

