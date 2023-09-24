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
            console.log("what happened here");
    }
}

function getPlayerChoice(){
    let selection = prompt("Rock Paper Scissors!")
    ret = selection.toUpperCase()
    if (ret === 'ROCK' || ret === 'PAPER' || ret === 'SCISSORS') {
        return ret.charAt(0).toUpperCase() + ret.slice(1).toLowerCase()
    } else {
        console.log("Invalid, please try again!")
    }
}

function playRound(playerSelection, computerSelection){
    console.log("Ready?")
    if (playerSelection === computerSelection){
        console.log("Draw!")
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    } else {
        console.log("whoops")
    }
}

const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()
console.log(playRound(playerSelection, computerSelection))