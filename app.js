let playerScore = 0;
let computerScore = 0;

function playerWin() {
    playerScore++;
}

function computerWin() {
    computerScore++;
}

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerScore >=5 || computerScore>=5) {
        getWinner();
    }
    else 
    {    playerSelection = playerSelection.toLowerCase();
        let roundResult = '';
        if(playerSelection === computerSelection) {
            roundResult = "It's a tie! Play again!";
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "paper")) {
            playerWin();
            roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
        } else {
            computerWin();
            roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
        }
        toPrint.innerHTML = roundResult + "<br><br>" + getScore()+"<br><br>";
        results.appendChild(toPrint.cloneNode(true));
    }
    if(playerScore >=5 || computerScore>=5) {
        getWinner();
    }
}

function tieBreaker() {
    console.log(playRound(prompt("Choose Your Weapon"), getComputerChoice()) + "\n");
    console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\n");
    getWinner();
}

function getScore() {
    return "Player Score: " + playerScore + "<br>Computer Score: " + computerScore + "<br>";
}

function getWinner() {
    if(playerScore > computerScore) {
        toPrint.textContent = ("PLAYER WINS BEST OUT OF 5");
    } else if(playerScore === computerScore) {
        toPrint.textContent = ("TIE BREAKER NEEDED");
        tieBreaker();
    } else {
        toPrint.textContent = ("COMPUTER WINS BEST OUT OF 5");
    }

    results.appendChild(toPrint);
}

function game() {
    playerScore = 0;
    computerScore = 0;
    
    getWinner();
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.querySelector('#results');
const toPrint = document.createElement("div");

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});