/**
 * 
 *                  Game Logic
 * 
 */
function getComputerChoice(){
    let ret = (Math.floor(Math.random() * 3) + 1)
    switch(ret) {
        case 1:
            return 'Rock'
            break;
        case 2:
            return 'Paper'
            break;
        case 3:
            return 'Scissors'
            break;
        default:
            console.log("what happened here?");
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        //return "Draw!";
        return 1;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        //return "You Lose! " + computerSelection + " beats " + playerSelection;
        return 2;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        //return "You Win! " + playerSelection + " beats " + computerSelection;
        return 3;
    }
}
// Unused functions below

function getPlayerChoice(){
    let selection = prompt("Rock Paper Scissors!")
    ret = selection.toUpperCase()
    if (ret === 'ROCK' || ret === 'PAPER' || ret === 'SCISSORS') {
        return ret.charAt(0).toUpperCase() + ret.slice(1).toLowerCase()
    } else {
        console.log("Invalid, please try again!")
    }
}

function game() {
       const computerSelection = getComputerChoice()
       const playerSelection = getPlayerChoice()
       console.log(playRound(playerSelection, computerSelection))
}

/**
 * 
 *                  UI Logic
 * 
 */

const container = document.querySelector('.container');
const startButton = document.createElement('button');
startButton.textContent = `Start`;
startButton.id = 'startBtn';
container.appendChild(startButton);
const replayButton = document.createElement('button');
replayButton.className = 'btnCont';
replayButton.textContent = 'Play Again?';


// When the start button is clicked: 
startButton.addEventListener('click', () => {
    // remove the start button
    // stats.remove();

    //intro.remove();

    startButton.remove();

    // these hold the # of wins and draws
    let playerWinCount = 0;
    let compWinCount = 0;
    let drawCount = 0;

    // divs used to display numbers on the page
    let playerWins = document.createElement('div');
    let compWins = document.createElement('div');
    let draws = document.createElement('div');

    // set equal to respective counters
    playerWins.innerHTML = playerWinCount;
    compWins.innerHTML = compWinCount;
    draws.innerHTML = drawCount;

    // create text variables for display
    let pCont = document.createElement('div');
    pCont.textContent = `Player Wins: `;
    let cCont = document.createElement('div');
    cCont.textContent = `Computer Wins: `;
    let dCont = document.createElement('div');
    dCont.textContent = `Draws: `;

    // add counters to text
    pCont.appendChild(playerWins);
    cCont.appendChild(compWins);
    dCont.appendChild(draws);
    
    // create container for the stats
    const stats = document.createElement('div');
    stats.id = 'stats';

    // append display elements to stats container
    stats.appendChild(pCont);
    stats.appendChild(cCont);
    stats.appendChild(dCont);

    // variable to display result of each ROUND
    let message = document.createElement('div');
    message.id = 'message';
    message.textContent = '';
    stats.appendChild(message);

    // variable to display END RESULT of the match
    let end = document.createElement('div');
    end.id = 'end';
    end.textContent = '';
    stats.appendChild(end);

    // button elements for each choice and their corresponding ids
    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    rockBtn.id = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    paperBtn.id = 'Paper';
    const scissBtn = document.createElement('button');
    scissBtn.textContent = 'Scissors';
    scissBtn.id = 'Scissors';

    // buttons added to the button container
    const btnCont = document.createElement('div');
    btnCont.className = 'btnCont';
    btnCont.appendChild(rockBtn);
    btnCont.appendChild(paperBtn);
    btnCont.appendChild(scissBtn);

    // button container added to stats
    // then added to the main container
    stats.appendChild(btnCont);
    container.appendChild(stats);
    const buttons = document.querySelectorAll('button');

/**
 * 
 *                  Button Logic
 * 
 */
    buttons.forEach((button) => {
        // on click of an rps option
        button.addEventListener('click', () => {
            // results are determined
            const computerSelection = getComputerChoice();
            let result = playRound(button.id, computerSelection);
            // draw
            // (innerHTML is used to set the value of the html to a number)
            if (result == 1) {
                drawCount++;
                draws.innerHTML = drawCount;
                message.textContent = "Draw";
            }
            // loss
            else if (result == 2) {
                compWinCount++;
                compWins.innerHTML = compWinCount;
                message.textContent = "You Lose! " + computerSelection + " beats " + button.id;
            }
            // win
            else if (result == 3) {
                playerWinCount++;
                playerWins.innerHTML = playerWinCount;
                message.textContent = "You Win! " + button.id + " beats " + computerSelection;
            }
            // if the player or computer wins 5 times
            if (playerWinCount >= 5 || compWinCount >= 5) {
                if (playerWinCount >= 5) {
                    end.textContent = "You Won!";
                }
                else if (compWinCount >= 5) {
                    end.textContent = `You Lost...`;
                }
                // add replay button to the bottom of the container
                // event listener to remove all of the container's children
                //      so it is ready for the new game
                end.appendChild(replayButton);
                replayButton.addEventListener('click', () => {
                    replayButton.remove();
                    container.appendChild(startButton);
                    pCont.remove();
                    cCont.remove();
                    dCont.remove();
                    message.remove();
                    end.remove();
                });
            }
        });
    });
});