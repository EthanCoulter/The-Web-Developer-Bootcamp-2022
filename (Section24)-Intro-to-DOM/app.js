const pokemonLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/.png`

for (let x = 1; x <= 151; x++){
    const poke = document.createElement('div')
    poke.className = "poke"
    const numPoke = document.createElement('span')
    numPoke.innerText = `# ${x}`
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`

    poke.appendChild(newImg)
    poke.appendChild(numPoke)
    document.body.appendChild(poke)
}