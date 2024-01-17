let playerSelection;
let computerSelection;
function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * 3) + 1;
  if (computerSelection === 1) {
    computerSelection = "rock";
  } else if (computerSelection === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function getPlayerChoice() {
  playerSelection = prompt("Rock, Paper, or Scissors?");
  round(playerSelection, computerSelection);
}
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    alert("it's a tie! Try again!");
    getComputerChoice();
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    alert("You Lose! Try again.");
    getComputerChoice();
  } else if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    alert("Please enter the right item!");
    getPlayerChoice();
  } else {
    alert("You Win!");
    getComputerChoice();
  }
}

for (let i = 0; i < 5; i++) {
    getPlayerChoice();
    console.log(`round ${i + 1} completed`)
}
