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
let winner = document.querySelector(".winner");

function computerMove() {
  let randomChoice = Math.floor(Math.random() * 3);
  return moveOptions[randomChoice];
}

function checkGame() {
  if (computerSelection === playerSelection) {
    winner.innerHTML = "The Game is a Tie!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winner.innerHTML = "The Computer Wins!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winner.innerHTML = "The Computer Wins!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winner.innerHTML = "The Computer Wins!";
  } else {
    winner.innerHTML = "The Player Wins!";
  }
}

function playerMove(e) {
  let element = e.target;
  if (element.className === "rock") {
    playerSelection = "rock";
  }
  if (element.className === "paper") {
    playerSelection = "paper";
  }
  if (element.className === "scissors") {
    playerSelection = "scissors";
  }
  playerResult.innerText = "Player: " + playerSelection;
  playGame();
}

function playGame() {
  computerSelection = computerMove();
  computerResult.innerText = "Computer: " + computerSelection;
  checkGame();
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => button.addEventListener("click", playerMove));
