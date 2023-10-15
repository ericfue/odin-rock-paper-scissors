game();

function playRound(playerChoice, computerChoice) {
    let playlen = playerChoice.length;
    let complen = computerChoice.length;
    if (playlen - complen === -4) {
        return youWin(playerChoice, computerChoice);
    } else if (playlen - complen === 4 || playlen < complen) {
        return youLose(playerChoice, computerChoice);
    } else if (playlen === complen) {
        return "Tie!"
    } else {
        return youWin(playerChoice, computerChoice)
    }
}

function youLose(playerChoice, computerChoice) {
    return "You lose! " + computerChoice + " beats " + playerChoice + "!";
}

function youWin(playerChoice, computerChoice) {
    return "You win! " + playerChoice + " beats " + computerChoice + "!";
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

function game() {
    let compScore = 0;
    let playScore = 0;
    let playerChoice = null;
    let computerChoice = null;
    let result = null;
    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        console.log("Round: " + (i + 1));
        result = playRound(playerChoice, computerChoice);
        if (result.includes("lose")) {
            compScore++;
        } else if (result.includes("tie")) {
            playScore += 0;
            compScore += 0;
        } else {
            playScore++;
        }
        console.log(playerChoice);
        console.log(computerChoice);
        console.log("Playscore: " + playScore)
        console.log("Compscore: " + compScore);
    }
    if (playScore > compScore) {
        console.log("You win the match!");
    } else {
        console.log("You lose the match!");
    }
}