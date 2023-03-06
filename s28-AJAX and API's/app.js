const req = new XMLHttpRequest();
// "https://swapi.dev/api/people/1/"
// req.onload = function() {
//     console.log("It LOADED")
//     const data = JSON.parse(this.responseText)
//     console.log(data)
// }

// req.onerror = function() {
//     console.log("ERROR!!!!")
//     console.log(this)
// }
// req.open("GET", "https://swapi.dev/api/people/1/")
// req.send()


// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESOLVED", res)
//     return res.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch((e) => {
//     console.log("ERROR", e)
// })

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json()
        console.log(data)
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json()
        console.log(data2)
    } catch (e) {
        console.log("ERROR", e)
    }
    
}
loadStarWarsPeople()