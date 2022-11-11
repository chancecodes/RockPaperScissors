// Get computer choice
// playRound
//     Player selection (case-insensitive)
//     Computer selection 
//     Return Winner
// Game() best of five for loop

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    var randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let userScore = 0;
let computerScore = 0;
let gameCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie, try again! You both picked " + playerSelection;
    } else if (
        playerSelection == "Rock" && computerSelection == "Scissors"
        || playerSelection == "Paper" && computerSelection == "Rock"
        || playerSelection == "Scissors" && computerSelection == "Paper"
        ) {
        userScore += 1;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore += 1;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
    button.addEventListener ('click', game);
    })

function game (e) {
    const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add('liveScore')
    var playerSelection = e.currentTarget.id;
    var computerSelection = getComputerChoice();

    highlight(playerSelection,computerSelection);

    var outcome = playRound(playerSelection,computerSelection);
    gameCount += 1

    if (userScore == 5) {
        outcome = "$$$ YOU WIN!!";
    } else if (computerScore == 5) {
        outcome = "GG'S YA LOST M8!!";
    };

    if (userScore == 5 || computerScore == 5) {
        btn.forEach((button) => {
            button.removeEventListener ('click', game);
        })
    };

    results.textContent = "Game " + gameCount + ": " + outcome;
    container.insertBefore(results, container.firstElementChild);

    const score = document.querySelector('.score');
    score.textContent = "Score: " + userScore + " to " + computerScore;

}

function highlight (playerSelection, computerSelection) {
    document.querySelectorAll('.highlight').forEach((el) => el.classList.remove('highlight'));
    
    var userHighlight = document.querySelector(`#${playerSelection}`);
    userHighlight.classList.add ('highlight');
    var compHighlight = document.querySelector(`#comp${computerSelection}`);
    compHighlight.classList.add ('highlight');
}