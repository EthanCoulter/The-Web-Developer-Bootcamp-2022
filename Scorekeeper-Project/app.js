const playerOneScore = document.querySelector('#playerOne')
const playerTwoScore = document.querySelector('#playerTwo')
const playerOneIncrease = document.querySelector('#playerOneButton')
const playerTwoIncrease = document.querySelector('#playerTwoButton')
const resetButton = document.querySelector('#resetScore')
const maxScore = document.querySelector('#maxScore')

playerOneScore.value = 0
playerTwoScore.value = 0

playerOneIncrease.addEventListener('click', () => {
    playerOneScore.value += 1
    playerOneScore.innerText = playerOneScore.value
})

playerTwoIncrease.addEventListener('click', () => {
    playerTwoScore.value += 1
    playerTwoScore.innerText = playerTwoScore.value
})

resetButton.addEventListener('click', () => {
    playerOneScore.value = 0
    playerOneScore.innerText = playerOneScore.value
    playerTwoScore.value = 0
    playerTwoScore.innerText = playerTwoScore.value
})

