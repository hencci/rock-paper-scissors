const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const displayMessage = document.querySelector("#displayMessage");
const restartButton = document.querySelector(".restartBtn");

let computerSelection;
let humanSelection;
let humanScore = 0;
let computerScore = 0;

playerScore.textContent = humanScore;
cpuScore.textContent = computerScore;

buttons.forEach((button) => {
     button.addEventListener("click", clickEvent);
});

function clickEvent(e) {
    computerSelection = getComputerChoice();
    humanSelection = e.target.getAttribute("id");
    playGame();
}

restartButton.addEventListener("click", restartGame);

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3) + 1;
    
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateScore() {
    playerScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
}

function playGame() {
    function playRound(humanChoice, cpuChoice) {        
        if (humanChoice === cpuChoice) {
            displayMessage.textContent = "It is a tie";
        }
        else if (humanChoice === "rock" && cpuChoice === "paper" || 
        humanChoice === "paper" && cpuChoice === "scissors" || 
        humanChoice === "scissors" && cpuChoice === "rock") {
            displayMessage.textContent = `You lose! ${cpuChoice} defeats ${humanChoice}`;
            computerScore += 1;
            updateScore();
        }
        else if (humanChoice === "rock" && cpuChoice === "scissors" || 
        humanChoice === "paper" && cpuChoice === "rock" || 
        humanChoice === "scissors" && cpuChoice === "paper") {
            displayMessage.textContent = `You Win! ${humanChoice} defeats ${cpuChoice}`;
            humanScore += 1;
            updateScore();
        }
    }
    
    playRound(humanSelection, computerSelection);
    
    if (humanScore === 5) {
        displayMessage.textContent = `You win the game! Final Score is ${humanScore} : ${computerScore}`;
        endGame();
    }
    else if (computerScore === 5) {
        displayMessage.textContent = `You lost! Final score is ${humanScore} : ${computerScore}`;
        endGame();
    }
}

function restartGame() {
    displayMessage.textContent = "Game restarted!"
    humanScore = 0;
    computerScore = 0;
    updateScore();
    buttons.forEach((button) => {
        button.addEventListener("click", clickEvent);
   });
}
function endGame() {
    buttons.forEach((button) => {
        button.removeEventListener("click", clickEvent);
    });
}