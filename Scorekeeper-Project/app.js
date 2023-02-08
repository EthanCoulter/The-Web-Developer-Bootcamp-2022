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
    if (maxScore.value > maxScoreVal){
        gameOver = false
        playerOneScore.classList.remove('winner', 'loser')
        playerTwoScore.classList.remove('winner', 'loser')
    }
    maxScoreVal = Number(maxScore.value)
    
})


playerOneIncrease.addEventListener('click', () => {
    if (!gameOver) {
        p1Score += 1
        playerOneScore.innerText = p1Score
        if (p1Score === maxScoreVal) {
            gameOver = true
            playerOneScore.classList.add('winner')
            playerTwoScore.classList.add('loser')

        }
        
}
})


playerTwoIncrease.addEventListener('click', () => {
    if (!gameOver) {
        p2Score += 1
        playerTwoScore.innerText = p2Score
        if (p2Score === maxScoreVal) {
            gameOver = true
            playerTwoScore.classList.add('winner')
            playerOneScore.classList.add('loser')
        }
        
}
})


resetButton.addEventListener('click', () => {
    p1Score = 0
    playerOneScore.innerText = p1Score
    p2Score = 0
    playerTwoScore.innerText = p2Score
    console.log(maxScoreVal)
    playerOneScore.classList.remove('winner', 'loser')
    playerTwoScore.classList.remove('winner', 'loser')
    gameOver = false
})
