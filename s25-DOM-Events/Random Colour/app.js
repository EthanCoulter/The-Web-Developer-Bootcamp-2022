const btn = document.querySelector('#colorChange');


btn.addEventListener('click', function() {
    const newColour = randColour()
    document.body.style.backgroundColor = newColour
    document.querySelector('h1').innerText = `${newColour}`

})

const randColour = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

for (let x = 1; x <= 50; x++) {
    const newBtn = document.createElement('button')
    newBtn.innerText = 'Click Me!'

    document.body.appendChild(newBtn)
}
for (let x = 1; x <= 50; x++) {
    const newH1 = document.createElement('h2')
    newH1.innerText = 'Click Me!'

    document.body.appendChild(newH1)
}

const allBtn = document.querySelectorAll("button")
const allH1 = document.querySelectorAll("h2")

for( let h1s of allH1) {
    h1s.addEventListener('click', colorize)
}

for (let btns of allBtn) {
    btns.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randColour()
    this.style.color = randColour()
}