{/* Get computer choice
playRound
    Player selection (case-insensitive)
    Computer selection 
    Return Winner
Game() best of five for loop */}

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    var randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}



let computerSelection = getComputerChoice();
let playerSelection = prompt("Pick!", "Rock, Paper, or Scissors").toLowerCase();


if (playerSelection == computerSelection) {
    alert ("Tie!")
}  else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert ("You win")
}  else if (playerSelection == "paper" && computerSelection == "rock") {
    alert ("You win")
}  else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert ("You win")
}   else {
    alert ("You lose")
}

console.log(computerSelection)
console.log(playerSelection)