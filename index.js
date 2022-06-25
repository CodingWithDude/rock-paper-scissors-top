/*
Play Against the computer
    function of ComputerPlay will return
        rock || paper || scissors

Plays single round
    function takes two parameters(playerSelection, computerSelection)
        return string that declars the winner

Make player selecton case-insensitive

Currently only output is via console - see readme for more info
*/

const moveOptions = ["rock", "paper", "scissors"];

// function for computer's move
function computerMove() {
  // random computerSelection of 0,1,2 for rock paper scissors
  let randomChoice = Math.floor(Math.random() * 3);
  // return value for computerSelection
  return moveOptions[randomChoice];
}

// function for players move
function playerMove() {
  // get player input in lowercase string
  let playerChoice = prompt(
    "Please choose a move of rock, paper, or scissors"
  ).toLowerCase();
  // validate input loop .indexOf returns -1 if no match in array
  while (moveOptions.indexOf(playerChoice) === -1) {
    alert("That is not a valid choice!");
    playerChoice = prompt("Please choose a move of rock, paper, or scissors");
  }
  return playerChoice;
}

// function to playGame
function playGame() {
  // get computer and player moves
  const playerSelection = playerMove();
  console.log("Player Selection: " + playerSelection);
  const computerSelection = computerMove();
  console.log("Computer Selection: " + computerSelection);

  // check for tie or winner
  if (computerSelection === playerSelection) {
    console.log("The game is a Tie!");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("The Computer Wins!");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("The Computer Wins!");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("The Computer Wins!");
  } else {
    console.log("The Player Wins!");
  }
}

// runs game
playGame();
