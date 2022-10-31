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

// const computerSelection = getComputerChoice();
// const playerSelection = prompt("Pick!", "Rock, Paper, or Scissors").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Tie!")
    }  else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log ("You win")
    }  else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log ("You win")
    }  else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log ("You win")
    }   else {
        console.log ("You lose")
    }
}




// play a round
// play again if tie 
// tally score 
// repeat until 5 games are played

// function game() {
//     let userScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i < 5; i++) {
//         var playerSelection = prompt("Pick!", "Rock, Paper, or Scissors").toLowerCase();
//         var computerSelection = getComputerChoice();
//         console.log(playerSelection)
//         console.log(computerSelection)
//         console.log(playRound(playerSelection, computerSelection))
//         if (playRound(playerSelection,computerSelection) == "Tie!") {
//             alert ("Tie! play again");
//             i -= 1;
//         } else if (playRound(playerSelection, computerSelection) == "You win") {
//             userScore += 1;
//             alert ("Nice! Score is " + userScore + " to " + computerScore);
//         } else {
//             computerScore += 1;
//             alert ("Yikes! Score is " + userScore + " to " + computerScore);
//         }
//     }
//     console.log(userScore + " to " + computerScore);
// }


const btn = document.querySelectorAll(".btn");
btn.forEach((btn) => {
    btn.addEventListener ('click', function(e) {
        var playerSelection = e.target.innerHTML;
        var computerSelection = getComputerChoice();
        
        console.log(playerSelection)
        console.log(computerSelection)


        playRound(playerSelection,computerSelection);

    })
})

//create a function that appendschild everytime playround is run

// const container = document.querySelector('#container');
// const results = document.createElement('div');

// results.textContent = "WIN OR LOSE"
// container.appendChild(results)
