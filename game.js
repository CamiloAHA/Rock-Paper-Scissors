//Rock=0 Paper=1 Scissors=2

function computerPlay() {
    let computerSelection = Math.random() * 3;
    return Math.floor(computerSelection); //Select floor value between 0 and 2.99...
}

function game(result) {
    alert("Welcome to the game, will be 5 rounds or best of three \n Good Luck!");
    let drawCount = 0
        , winCount = 0
        , loseCount = 0;
    let gameResult;

    if (result == "Draw") {
        drawCount++;
    } else if (result.slice(0, 8) == "You Win!") {
        winCount++;
    } else {
        loseCount++;
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

function playRound(playerSelection) {
    let result;
    let computerSelection = computerPlay()
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(button.id)
        content.appendChild(results)
    });
});

const content = document.querySelector('.content')
const results = document.createElement('div')
