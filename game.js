//Rock=0 Paper=1 Scissors=2

function computerPlay() {
    let computerSelection = Math.random() * 3 - 1e-9;
    return Math.floor(computerSelection);
}

function game() {
    alert("Welcome to the game, will be max 5 rounds, best of three");
    for (let a = 0; a < 5; a++) {
        let selection = prompt("Choose your fighter (Rock, paper or scissors)");
        console.log(playRound(+selection, computerPlay()));
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == 0) {
        if (computerSelection == 1) {
            result = "You Lose! Paper beats Rock";
        } if (computerSelection == 2) {
            result = "You Win! Rock beats Scissors";
        } else {
            result = "Draw";
        }
    } if (playerSelection == 1) {
        if (computerSelection == 0) {
            result = "You Win! Paper beats Rock";
        } if (computerSelection == 2) {
            result = "You Lose! Scissors beats Paper";
        } else {
            result = "Draw";
        }
    } else {
        if (computerSelection == 0) {
            result = "You Lose! Rock beats Scissors";
        } if (computerSelection == 1) {
            result = "You Win! Scissors beats Paper";
        } else {
            result = "Draw";
        }
    }
    return result;
}

console.log(game());
