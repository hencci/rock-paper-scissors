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

function getHumanChoice() {

}