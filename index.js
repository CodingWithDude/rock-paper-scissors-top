/*
Play Against the computer
    function of ComputerPlay will return
        rock || paper || scissors

Plays single round
    function takes two parameters(playerSelection, computerSelection)
        return string that declars the winner

Make player selecton case-insensitive

Working on the UI elements
*/

const moveOptions = ["rock", "paper", "scissors"];
let playerResult = document.querySelector(".playerResult");
let computerResult = document.querySelector(".computerResult");
let winnerMessage = document.querySelector(".winner");
let playerImage = document.querySelector(".playerImage");
let computerImage = document.querySelector(".computerImage");

function computerMove() {
  let randomChoice = Math.floor(Math.random() * 3);
  if ((randomChoice = 0)) {
    computerImage.innerHTML =
      '<img class="resultImage" src="images/rock.svg" alt="Rock" />';
  }
  if ((randomChoice = 1)) {
    computerImage.innerHTML =
      '<img class="resultImage" src="images/paper.svg" alt="paper" />';
  }
  if ((randomChoice = 2)) {
    computerImage.innerHTML =
      '<img class="resultImage" src="images/scissors.svg" alt="scissors" />';
  }
  return moveOptions[randomChoice];
}

function checkGame() {
  if (computerSelection === playerSelection) {
    winnerMessage.innerHTML = "The Game is a Tie!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winnerMessage.innerHTML = "The Computer Wins!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winnerMessage.innerHTML = "The Computer Wins!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winnerMessage.innerHTML = "The Computer Wins!";
  } else {
    winnerMessage.innerHTML = "The Player Wins!";
  }
}

function playerMove(e) {
  let element = e.target;
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
  playGame();
}

function playGame() {
  computerSelection = computerMove();
  checkGame();
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => button.addEventListener("click", playerMove));
