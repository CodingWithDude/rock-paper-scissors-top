const moveOptions = ["rock", "paper", "scissors"];
let playerResult = document.querySelector(".playerResult");
let computerResult = document.querySelector(".computerResult");
let winnerMessage = document.querySelector(".winnerMessage");
let playerImage = document.querySelector(".playerImage");
let computerImage = document.querySelector(".computerImage");
let computerSelection;
let playerSelection;

function computerMove() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    computerImage.innerHTML =
      '<img class="resultImage" src="images/rock.svg" alt="Rock" />';
  }
  if (randomChoice === 1) {
    computerImage.innerHTML =
      '<img class="resultImage" src="images/paper.svg" alt="paper" />';
  }
  if (randomChoice === 2) {
    computerImage.innerHTML =
      '<img class="resultImage" src="images/scissors.svg" alt="scissors" />';
  }
  return moveOptions[randomChoice];
}

function playerMove(e) {
  let element = e.target;
  console.log(element);
  if (element.className === "rock") {
    playerSelection = "rock";
    playerImage.innerHTML =
      '<img class="resultImage" src="images/rock.svg" alt="Rock"  />';
  }
  if (element.className === "paper") {
    playerSelection = "paper";
    playerImage.innerHTML =
      '<img class="resultImage" src="images/paper.svg" alt="Rock" />';
  }
  if (element.className === "scissors") {
    playerSelection = "scissors";
    playerImage.innerHTML =
      '<img class="resultImage" src="images/scissors.svg" alt="Rock" />';
  }
  console.log(playerSelection);
  playGame();
}

function checkGame() {
  playerImage.classList.remove("winnerImage");
  computerImage.classList.remove("winnerImage");
  if (computerSelection === playerSelection) {
    winnerMessage.innerHTML = "The Game is a Tie!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winnerMessage.innerHTML = "The Computer Wins!";
    computerImage.classList.toggle("winnerImage");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winnerMessage.innerHTML = "The Computer Wins!";
    computerImage.classList.toggle("winnerImage");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winnerMessage.innerHTML = "The Computer Wins!";
    computerImage.classList.toggle("winnerImage");
  } else {
    winnerMessage.innerHTML = "The Player Wins!";
    playerImage.classList.toggle("winnerImage");
  }
}

function playGame() {
  computerSelection = computerMove();
  console.log(computerSelection);
  checkGame();
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => button.addEventListener("click", playerMove));
console.log(playerSelection);
console.log(computerSelection);
