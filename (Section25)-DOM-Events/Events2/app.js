const form  = document.querySelector("#shelterForm")
const catList = document.querySelector("#cats")
const input = document.querySelector("#catName")
form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const newCat = document.createElement("li")
    newCat.innerText = input.value
    catList.appendChild(newCat)
    input.value = ''
})

