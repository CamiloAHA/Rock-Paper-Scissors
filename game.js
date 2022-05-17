//Rock=0 Paper=1 Scissors=2

function computerPlay() {
    let computerSelection = Math.random() * 3;
    return Math.floor(computerSelection); //Select floor value between 0 and 2.99...
}

function game() {
    let drawCount = 0
        , winCount = 0
        , loseCount = 0;
    let result
        , gameResult;

    const content = document.querySelector('.content')
    const results = document.createElement('h2')
    const score = document.createElement('h2')
    score.setAttribute('style', 'white-space: pre;');


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', scoreDisplay);
    });

    function scoreDisplay() {
        results.textContent = playRound(this.id)
        if (results.textContent == "Draw") {
            drawCount++;
        } else if (results.textContent.slice(0, 8) == "You Win!") {
            winCount++;
        } else {
            loseCount++;
        }
        score.textContent = currentResult()

        content.appendChild(results)
        content.appendChild(score)

        if (score.textContent.slice(0, 3) == "You") deleteEvents();
    }

    function deleteEvents() {
        buttons.forEach(button => {
            button.removeEventListener('click', scoreDisplay)
        })
    }

    function currentResult() {
        if (winCount === 5) {
            gameResult = `You Win the Game!\r\n Results =  Wins: ${winCount}  Loses: ${loseCount}  Draws: ${drawCount} \n`;
        } else if (loseCount === 5) {
            gameResult = `You Lose the Game!\r\n Results =  Wins: ${winCount}  Loses: ${loseCount}  Draws: ${drawCount} \n`;
        } else {
            gameResult = `Results =  Wins: ${winCount}  Loses: ${loseCount}  Draws: ${drawCount} `
        }
        return gameResult;
    }
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

game()