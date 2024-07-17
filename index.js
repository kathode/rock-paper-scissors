const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice(isValid = true) {
  const getHumanInput = prompt(isValid ? "Enter rock, paper, or scissors: " : "Invalid: Enter rock, paper, or scissors");

  if (choices.includes(getHumanInput?.toLowerCase())) {
    return getHumanInput.toLowerCase();
  } else {
    return getHumanChoice(false);
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const computerWin = () => {
    computerScore += 1;
    console.log(`${computerChoice} beats ${humanChoice}`);
  };

  const humanWin = (choice) => {
    humanScore += 1;
    console.log(`${humanChoice} beats ${choice}`);
  };

  if (humanChoice === computerChoice) {
    console.log("Its a draw");
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

  console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log("Congratulation, humans win");
  } else if (humanScore < computerScore) {
    console.log("Unfortunately, computers have taken over");
  } else {
    console.log("Game ends in a draw");
  }
}

playGame(5);
