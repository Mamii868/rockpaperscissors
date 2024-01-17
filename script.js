
let choice;
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1
    //Remove
    console.log(choice)
    if (choice === 1) {
        choice = 'rock'
    } else if (choice === 2) {
        choice = 'paper'
    } else {
        choice = 'scissors'
    }
    return choice
}


getComputerChoice()
//Remove
console.log(choice)

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        alert("it's a tie! Try again!")
        getPlayerChoice();
    } else if (playerSelection === 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors') {
        alert('You Lose! Try again.')
        getPlayerChoice();
    } else {
        alert('You Win!')
    }
}