let playerSelection;
let computerSelection;
const button = document.querySelectorAll("button");
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

button.forEach((btn) =>
  btn.addEventListener("click", () => {
    getComputerChoice();
    round(btn.value, computerSelection);
  })
);

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    alert("it's a tie! Try again!");
    getComputerChoice();
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
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
