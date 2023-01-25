let actionInput = prompt("What would you like to do?")

const todoList = []

while (actionInput !== "quit") {
    actionInput = prompt("What would you like to do?")
    if (actionInput === "new") {
        temp = prompt("Enter new todo");
        todoList.push(temp)
        console.log(`${temp} added to list`)
    }
    if (actionInput === "list"){
        console.log("**********")
        for (let x = 0; x <= todoList.length - 1; x++){
            console.log(`${x}: ${todoList[x]}`)
        }
        console.log("**********")
    }
    if (actionInput === "delete"){
        delIndex = parseInt(prompt("Enter index of todo to delete"))
        todoList.splice(delIndex, 1)
        console.log("Todo Removed")
    }
}