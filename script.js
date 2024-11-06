let humanScore = 0;
let cpuScore = 0;

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

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Rock, Paper, or Scissors?"); humanChoice = humanChoice.toUpperCase();

    if (humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS") {
        return humanChoice;
    }
    else {
        alert("Invalid input");
        getHumanChoice();
    }
    
}

console.log(getHumanChoice());

function playRound(humanChoice, cpuChoice) {

}