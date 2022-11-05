// Get computer choice
// playRound
//     Player selection (case-insensitive)
//     Computer selection 
//     Return Winner
// Game() best of five for loop

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    var randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game! Try again";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"
        ) {
        userScore += 1;
        return "You win! score is " + userScore + " to " + computerScore;
    } else {
        computerScore += 1;
        return ("You lose! score is " + userScore + " to " + computerScore);
    }
}

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
    button.addEventListener ('click', game)
    })

function game (e) {
    const container = document.querySelector('#container');
    const results = document.createElement('div');
    var playerSelection = e.target.innerHTML;;
    var computerSelection = getComputerChoice();
    var outcome = playRound(playerSelection,computerSelection);

    if (userScore == 5) {
        outcome = "$$$ YOU WIN!! FINAL SCORE IS " + userScore + " to " + computerScore;
    } else if (computerScore == 5) {
        outcome = "GG'S YA LOST M8!! FINAL SCORE IS " + userScore + " to " + computerScore;
    }

    if (userScore == 5 || computerScore == 5) {
        btn.forEach((button) => {
            button.removeEventListener ('click', game)
        })
    }

    results.textContent = outcome;
    container.appendChild(results)
}

