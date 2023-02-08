const playerOneScore = document.querySelector('#playerOne')
const playerTwoScore = document.querySelector('#playerTwo')
const playerOneIncrease = document.querySelector('#playerOneButton')
const playerTwoIncrease = document.querySelector('#playerTwoButton')
const resetButton = document.querySelector('#resetScore')
const maxScore = document.querySelector('#maxScore')


let p1Score = 0
let p2Score = 0
let maxScoreVal = Number(maxScore.value)
let gameOver = false



maxScore.addEventListener('change', () => {
    maxScoreVal = Number(maxScore.value)
})


playerOneIncrease.addEventListener('click', () => {
    if (!gameOver) {
        p1Score += 1
        if (p1Score === maxScoreVal) {
            gameOver = true
            playerOneScore.className = 'winner'
            playerTwoScore.className = 'loser'

        }
        playerOneScore.innerText = p1Score
}
})


playerTwoIncrease.addEventListener('click', () => {
    if (!gameOver) {
        p2Score += 1
        if (p2Score === maxScoreVal) {
            gameOver = true
            playerTwoScore.className = 'winner'
            playerOneScore.className = 'loser'
        }
        playerTwoScore.innerText = p2Score
}
})


resetButton.addEventListener('click', () => {
    p1Score = 0
    playerOneScore.innerText = p1Score
    p2Score = 0
    playerTwoScore.innerText = p2Score
    console.log(maxScoreVal)
    playerOneScore.className = ''
    playerTwoScore.className = ''
    gameOver = false
})
