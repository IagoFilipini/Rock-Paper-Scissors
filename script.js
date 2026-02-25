function getHumanChoice() { //shows a prompt screen for user answer
    return choice = prompt("Type rock, paper or scissors: ");
}

function getComputerChoice() { //generate a random number between 0 to 2 and determine their role (rock,paper or scissor) by its number
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return randomChoice = "rock";
    } else if (randomChoice === 1) {
        return randomChoice = "paper";
    } else {
        return randomChoice = "scissors";
    }
}

function playGame() {
    // //initiate both scores
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase(); //makes humanChoice value case-insensitive

        //shows both player and computer choices
        console.log(`human: ${human}`);
        console.log(`computer: ${computerChoice}`);

        //generate the win/lose conditions by comparing its value
        if (
            (human === "rock" && computerChoice === "paper") ||
            (human === "paper" && computerChoice === "scissors") ||
            (human === "scissors" && computerChoice === "rock")
        ) {
            console.log("computer WIN");
            computerScore++;
        } else if (human === computerChoice) {
            console.log("TIE");
        } else {
            console.log("human WIN");
            humanScore++;
        }

        console.log(`Score → human: ${humanScore} x computer: ${computerScore}`); //shows running game score
        console.log("---------------------");

    }

    for (let i = 0; i < 5; i++) { //calls the getHumanChoice() and getComputerChoice() 5 times for it to generate different results
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); //pass the result to playRound() so it can generate the win/lose condition
    }

    console.log("FINAL RESULT:");
    console.log(`human: ${humanScore} x computer: ${computerScore}`); //shows final score
}

playGame(); //calls the function to start the "game"


