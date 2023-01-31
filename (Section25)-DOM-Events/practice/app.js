const btn = document.querySelector('#v2');

btn.onclick = () => {
    console.log("You clicked me")
}
btn.onmouseenter = () => {
    console.log("STOP TOUCHING ME")
}

const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', () => {
    console.log("You clicked me ")
})
btn3.addEventListener('enter', () => {
    console.log("Stop hovering over me")
})