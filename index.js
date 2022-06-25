/*
Play Against the computer
    function of ComputerPlay will return
        rock || paper || scissors

Plays single round
    function takes two parameters(playerSelection, computerSelection)
        return string that declars the winner

make player selecton case-insensitive
*/

// function to let the computerPlay
function computerPlay() {
    // random computerSelection of 0,1,2 for rock paper scissors
    let moveOptions = ["Rock","Paper","Scissors"]
    let randomChoice = Math.floor(Math.random()*3)
    // return computerSelection
    return moveOptions[randomChoice]
}

// creating computerSelection
const computerSelection = computerPlay()
// testing functionality
console.log(computerSelection)
    
    // return computerSelection

// function to playGame
    // prompt for playerSelection
    // if playerSelection === computerSelection
        // return "The game is a draw!"
    // else if playerSelection beats computerSelection
        // return "The Player wins the game!"
    // else 
        // return "The Computer wins the game!"