const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const displayMessage = document.querySelector("#displayMessage");

let computerSelection;
let humanSelection;

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
    let cpuChoice;
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if (choice === 1) {
        cpuChoice = "ROCK";
    }
    else if (choice === 2) {
        cpuChoice = "PAPER";
    }
    else {
        cpuChoice = "SCISSORS";
    }

    return cpuChoice;
}

function playGame() {
    let humanScore = 0;
    let cpuScore = 0;

    function playRound(humanChoice, cpuChoice) {
        let message = console.log(`Your choice: ${humanChoice} | CPU choice: ${cpuChoice}`);
        
        if (humanChoice === cpuChoice) {
            message;
            console.log("It is a tie")
        }
        else if (humanChoice === "ROCK" && cpuChoice === "PAPER" || 
        humanChoice === "PAPER" && cpuChoice === "SCISSORS" || 
        humanChoice === "SCISSORS" && cpuChoice === "ROCK") {
            message;
            console.log(`You lose! ${cpuChoice} defeats ${humanChoice}`);
            cpuScore += 1;
        }
        else if (humanChoice === "ROCK" && cpuChoice === "SCISSORS" || 
        humanChoice === "PAPER" && cpuChoice === "ROCK" || 
        humanChoice === "SCISSORS" && cpuChoice === "PAPER") {
            message;
            console.log(`You Win! ${humanChoice} defeats ${cpuChoice}`);
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