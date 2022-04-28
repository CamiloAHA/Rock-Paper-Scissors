//Rock=0 Paper=1 Scissors=2

function computerPlay() {
    let computerSelection = Math.random() * 3; 
    return Math.floor(computerSelection); //Select floor value between 0 and 2.99...
}

function game() {
    alert("Welcome to the game, will be 5 rounds or best of three \n Good Luck!");
    let drawCount = 0
        , winCount = 0
        , loseCount = 0;
    let gameResult;
    for (let a = 0; a < 5; a++) {
        let selection = prompt("Choose your fighter (Rock, paper or scissors)");
        let result = playRound(selection.toLowerCase(), computerPlay());
        console.log(result);
        if (result == "Draw") {
            drawCount++;
        } else if (result.slice(0, 8) == "You Win!") {
            winCount++;
        } else {
            loseCount++;
        }
        console.log(`Human: ${winCount}, WebPage: ${loseCount}`)
        if (winCount == 3 | loseCount == 3) {
            break;
        }
    }

    if (winCount == 3 | winCount > loseCount) {
        gameResult = `\n You Win the Game!\n Results=  Wins: ${winCount}  Loses: ${loseCount}  Draws: ${drawCount} \n `;
    } else if (loseCount == 3 | loseCount > winCount) {
        gameResult = `\n You Lose the Game!\n Results=  Wins: ${winCount}  Loses: ${loseCount}  Draws: ${drawCount} \n `;
    } else {
        gameResult = `\n You Draw the Game!\n Results=  Wins: ${winCount}  Loses: ${loseCount}  Draws: ${drawCount} \n `;
    }
    return gameResult;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == "rock") {
        if (computerSelection == 1) {
            result = "You Lose! Paper beats Rock";
        } else if (computerSelection == 2) {
            result = "You Win! Rock beats Scissors";
        } else {
            result = "Draw";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == 0) {
            result = "You Win! Paper beats Rock";
        } else if (computerSelection == 2) {
            result = "You Lose! Scissors beats Paper";
        } else {
            result = "Draw";
        }
    } else {
        if (computerSelection == 0) {
            result = "You Lose! Rock beats Scissors";
        } else if (computerSelection == 1) {
            result = "You Win! Scissors beats Paper";
        } else {
            result = "Draw";
        }
    }
    return result;
}

console.log(game());
