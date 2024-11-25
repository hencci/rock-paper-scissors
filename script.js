// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");
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
    button.addEventListener("click", (e) => {
        computerSelection = getComputerChoice();
        humanSelection = e.target.getAttribute("id");
        playGame();
    });
});

restartButton.addEventListener("click", restartGame);

// rock.addEventListener("click", (e) => {
//     computerSelection = getComputerChoice();
//     humanSelection = e.target.getAttribute("id");
//     playGame();
// })
// paper.addEventListener("click", (e) => {
//     computerSelection = getComputerChoice();
//     humanSelection = e.target.getAttribute("id");
//     playGame();
// })
// scissors.addEventListener("click", (e) => {
//     computerSelection = getComputerChoice();
//     humanSelection = e.target.getAttribute("id");
//     playGame();
// })

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
        displayMessage.textContent = "You win the game! You're smarter than the computer";
    }
    else if (computerScore === 5) {
        displayMessage.textContent = "You lost! Better chance next time!";
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}