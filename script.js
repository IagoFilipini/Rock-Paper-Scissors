function getComputerChoice() { //generate a random number between 0 to 2 and determine their role (rock,paper or scissor) by its number
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector(".rock-btn");
    const paper = document.querySelector(".paper-btn");
    const scissors = document.querySelector(".scissors-btn");
    const div = document.querySelector("#resultDisplay");
    const runningScore = document.querySelector("#runningScore")
    const finalScore = document.querySelector("#finalScore");
    const restartBtn = document.querySelector("#restartBtn");

    restartBtn.addEventListener('click', resetGame);

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        div.textContent = "";
        runningScore.textContent = "";
        finalScore.textContent = "";
    }

    rock.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener('click', () => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice());
    });

    function playRound(humanChoice, computerChoice) {

        if (humanScore === 5 || computerScore === 5) {
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            div.textContent = "COMPUTER WIN";
            computerScore++;
        } else if (humanChoice === computerChoice) {
            div.textContent = "TIE";
        } else {
            div.textContent = "HUMAN WIN";
            humanScore++;
        }

        if (humanScore === 5) {
            finalScore.textContent = `Final Result: human: ${humanScore} x computer: ${computerScore}. HUMAN WIN!!!`;
        } else if (computerScore === 5) {
            finalScore.textContent = `Final Result: human: ${humanScore} x computer: ${computerScore}. COMPUTER WIN!!!`;
        }

        runningScore.textContent = `Score → human: ${humanScore} x computer: ${computerScore}`;

    }
}

playGame(); //calls the function to start the "game"


