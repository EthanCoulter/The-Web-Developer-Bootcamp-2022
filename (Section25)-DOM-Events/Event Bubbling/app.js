const button = document.querySelector('#colBut')
const div = document.querySelector("#newdiv")

const randColour = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

button.addEventListener('click', function(e) {
    div.style.backgroundColor = randColour()
    e.stopPropagation()

})
div.addEventListener('click', function() {
    div.classList.toggle('hide')
})
