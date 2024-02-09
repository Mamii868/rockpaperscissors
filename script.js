let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const button = document.querySelectorAll(".choice");
const resultsContainer = document.querySelector(".results");
const messageBox = document.querySelector(".message");
const finalBox = document.querySelector(".final");
const restart = document.querySelector(".restart");
const scoreBox = document.querySelector(".score");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");

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

//Display Score
function updateScore() {
  pScore.innerHTML = `${playerScore}`
  cScore.innerHTML = `${computerScore}`
  if (playerScore === 5) {
    button.forEach((btn) => {
      btn.disabled = true;
    });
    finalBox.innerHTML = "You Win! Press the button to play again!";
    restart.removeAttribute("hidden");
    return;
  } else if (computerScore === 5) {
    button.forEach((btn) => {
      btn.disabled = true;
    });
    finalBox.innerHTML = "You Lose! Press the button to play again!";
    restart.removeAttribute("hidden");
    return;
  }
}
updateScore();

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
    messageBox.innerHTML = "It's a tie! Run it back.";
    getComputerChoice();
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    messageBox.innerHTML = "Computer Won. Try Again!";
    computerScore++;
    countAnimation(cScore);
    getComputerChoice();
    updateScore();
  } else if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    messageBox.innerHTML = "You should never see this error";
  } else {
    messageBox.innerHTML = "You won the round! Keep going!";
    playerScore++;
    countAnimation(pScore);
    getComputerChoice();
    updateScore();
  }
}

function countAnimation(roundWinner) {
roundWinner.classList.add("countUp")
setTimeout(() => {roundWinner.classList.remove("countUp")}, 360)
}


restart.addEventListener("click", () => {
  location.reload();
});
