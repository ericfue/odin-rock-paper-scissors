let playerWins = 0;
let computerWins = 0;

game();

if (playerWins > computerWins) {
    console.log("You win the match!");
} else if (playerWins === computerWins) {
    console.log("You tie the match!");
} else {
    console.log("You lose the match!");
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
        console.log("Round " + (i + 1) + " complete.");
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);
    }
}

function getPlayerChoice() {
    return capitalize(prompt("Please select rock, paper, or scissors: "));
}

function capitalize(str) {
    let firstLetter = str.slice(0, 1);
    let restOfWord = str.slice(1);
    let cap = firstLetter.toUpperCase();
    let end = restOfWord.toLowerCase();
    return cap.concat(end);
}

function getComputerChoice() {
    let compChoice = (Math.floor(Math.random() * 300)) % 3;
    switch(compChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
    let playlen = playerChoice.length;
    let complen = computerChoice.length;
    if (playlen - complen === -4) {
        youWin(playerChoice, computerChoice);
    } else if (playlen - complen === 4 || playlen < complen) {
        youLose(playerChoice, computerChoice);
    } else if (playlen === complen) {
        youTie(playerChoice, computerChoice);
    } else {
        youWin(playerChoice, computerChoice)
    }
}

function youLose(playerChoice, computerChoice) {
    computerWins++;
    console.log("You lose! " + computerChoice + " beats " + playerChoice + "!");
}

function youTie(playerChoice, computerChoice) {
    computerWins += 0;
    playerWins += 0;
    console.log(playerChoice + " ties with " + computerChoice + ".");
}

function youWin(playerChoice, computerChoice) {
    playerWins++;
    console.log("You win! " + playerChoice + " beats " + computerChoice + "!");
}