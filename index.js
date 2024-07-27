const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const roundResults = document.querySelector(".round-results");
const gameResults = document.querySelector(".game-results");
const gameScore = document.querySelector(".game-score");
const roundsCount = document.querySelector(".rounds-count");

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  const computerWin = () => {
    computerScore += 1;
    roundResults.textContent = `${computerChoice} beats ${humanChoice}`;
  };

  const humanWin = (choice) => {
    humanScore += 1;
    roundResults.textContent = `${humanChoice} beats ${choice}`;
  };

  if (humanChoice === computerChoice) {
    roundResults.textContent = "Its a draw";
  } else {
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerWin();
      } else {
        humanWin("scissors");
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        computerWin();
      } else {
        humanWin("rock");
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        computerWin();
      } else {
        humanWin("paper");
      }
    }
  }

  rounds += 1;
  roundsCount.textContent = `Round: ${rounds}`;
  displayGameResults();
}

function displayGameResults() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      gameResults.textContent = "Congratulation, humans win";
    } else if (humanScore < computerScore) {
      gameResults.textContent = "Unfortunately, computers have taken over";
    } else {
      gameResults.textContent = "Game ends in a draw";
    }
  }

  gameScore.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissors"));

rock.removeEventListener("click", () => console.log("rock listener removed"));
paper.removeEventListener("click", () => console.log("paper listener removed"));
scissor.removeEventListener("click", () => console.log("scissor listener removed"));
