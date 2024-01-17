let playerSelection;
let computerSelection;
function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * 3) + 1;
  //Remove
  console.log(computerSelection);
  if (computerSelection === 1) {
    computerSelection = "rock";
  } else if (computerSelection === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

getComputerChoice();
//Remove
console.log(computerSelection);

function getPlayerChoice() {
  playerSelection = prompt("Rock, Paper, or Scissors?");
  console.log(playerSelection);
  round(playerSelection, computerSelection);
}
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    alert("it's a tie! Try again!");
    getPlayerChoice();
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    alert("You Lose! Try again.");
    getPlayerChoice();
  } else if (
    playerSelection != "rock" ||
    playerSelection != "paper" ||
    playerSelection != "scissors"
  ) {
    alert("Please enter the right item!");
    getPlayerChoice();
  } else {
    alert("You Win!");
  }
}

getPlayerChoice();
