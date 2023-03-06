

let max = parseInt(prompt("Enter the maximum number"));

while(!max){
    max = parseInt(prompt("Enter a valid number!"));

}

const targNum = Math.floor(Math.random() * max) + 1;
console.log("The number picked is " + targNum);

let guessCount = 1

let guess = parseInt(prompt("Enter your first guess"));
while(parseInt(guess) !== targNum) {
    if (guess > targNum){
        guess = (prompt("Your guess was too high"));
        guessCount +=1
    } else if (guess < targNum){
        guess = (prompt("Your guess was too low"));
        guessCount += 1
    }
}

console.log(`You guessed the correct number! it was ${guess}. It took you ${guessCount} guesses!`)