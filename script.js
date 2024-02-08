let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const button = document.querySelectorAll("button");
const resultsContainer = document.querySelector(".results");
const messageBox = document.querySelector(".message");

//Logic for computer opponent
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

//Selection button listener
button.forEach((btn) =>
  btn.addEventListener("click", () => {
    getComputerChoice();
    round(btn.value, computerSelection);
  })
);

//Logic to calculate winner
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    messageBox.innerHTML = "It's a tie! Run it back."
    getComputerChoice();
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    messageBox.innerHTML = "Computer Won. Try Again!"
    computerScore++;
    getComputerChoice();
  } else if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    messageBox.innerHTML = "You should never see this error"
  } else {
    messageBox.innerHTML = "You won the round! Keep going!"
    playerScore++
    getComputerChoice();
  }
}

if (playerScore === 5) {
  alert("You Win! Press OK to try again!")
  location.reload()
} else if (computerScore === 5) {
  alert("You Lose! Press OK to try again!")
}