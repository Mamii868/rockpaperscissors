
let choice;
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1
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
console.log(choice)