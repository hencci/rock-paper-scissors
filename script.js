const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const displayMessage = document.querySelector("#displayMessage");

let computerSelection;
let humanSelection;
let humanScore = 0;
let computerScore = 0;

playerScore.textContent = humanScore;
cpuScore.textContent = computerScore;

rock.addEventListener("click", (e) => {
    computerSelection = getComputerChoice();
    humanSelection = e.target.getAttribute("id");
    playGame();
})
paper.addEventListener("click", (e) => {
    computerSelection = getComputerChoice();
    humanSelection = e.target.getAttribute("id");
    playGame();
})
scissors.addEventListener("click", (e) => {
    computerSelection = getComputerChoice();
    humanSelection = e.target.getAttribute("id");
    playGame();
})

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
        }
        else if (humanChoice === "rock" && cpuChoice === "scissors" || 
        humanChoice === "paper" && cpuChoice === "rock" || 
        humanChoice === "scissors" && cpuChoice === "paper") {
            displayMessage.textContent = `You Win! ${humanChoice} defeats ${cpuChoice}`;
            humanScore += 1;
        }
    }
    
    playRound(humanSelection, computerSelection);
    
    console.log(`Human Score: ${humanScore} | Computer Score: ${cpuScore}`);
    if (humanScore > cpuScore) {
        console.log("You win the game! You're smarter than the computer")
    } else if (humanScore < cpuScore) {
        console.log("You lost! Better chance next time!")
    } else {
        console.log("The game ends in a TIE!")
    }
}