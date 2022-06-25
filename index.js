/*
Play Against the computer
    function of ComputerPlay will return
        rock || paper || scissors

Plays single round
    function takes two parameters(playerSelection, computerSelection)
        return string that declars the winner

make player selecton case-insensitive
*/

const moveOptions = ["rock","paper","scissors"]

// function for computer's move
function computerMove() {
    // random computerSelection of 0,1,2 for rock paper scissors
    let randomChoice = Math.floor(Math.random()*3)
    // return value for computerSelection
    return moveOptions[randomChoice]
}


// function for players move
function playerMove() {
    // get player input in lowercase string
    let playerChoice = prompt("Please choose a move of rock, paper, or scissors").toLowerCase()
    // validate input loop .indexOf returns -1 if no match in array
    while (moveOptions.indexOf(playerChoice) === -1) {
        alert("That is not a valid choice!")
        playerChoice = prompt("Please choose a move of rock, paper, or scissors")
    }
    return playerChoice

}

// function to playGame
    
    // if playerSelection === computerSelection
        // return "The game is a draw!"
    // else if playerSelection beats computerSelection
        // return "The Player wins the game!"
    // else 
        // return "The Computer wins the game!"


// creating computerSelection
const computerSelection = computerMove()
// testing functionality
console.log(computerSelection)

// creating playerSelection
const playerSelection = playerMove()
// testing functionality
console.log(playerSelection)
