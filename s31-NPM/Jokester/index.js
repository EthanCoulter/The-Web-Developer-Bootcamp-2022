const joke = require("give-me-a-joke")
const colors = require("colors")
const cowsay = require("cowsay")
joke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow)
    
})

