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
    switch(choice){
        case 1: return "rock";
                break;
        case 2: return "paper";
                break;
        case 3: return "scissors";
                break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return "It's a tie! Play again!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")) {
        playerWin();
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerWin();
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function tieBreaker() {
    console.log(playRound(prompt("Choose Your Weapon"),getComputerChoice())+"\n");
    console.log("Player Score: "+playerScore+"\nComputer Score: "+computerScore+"\n");
    getWinner();
}

function getWinner() {
    if(playerScore > computerScore) {
        console.log("\n\nPLAYER WINS BEST OUT OF 5");
    } else if(playerScore === computerScore) {
        console.log("\n\nTIE BREAKER NEEDED")
        tieBreaker();

    } else{
        console.log("\n\nCOMPUTER WINS BEST OUT OF 5");
    }
    console.log("\n\n")
}

function game() {
    playerScore =0;
    computerScore = 0;
    
    getWinner();
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
   console.log(playRound('rock',getComputerChoice()));
})
paper.addEventListener('click', () => {
    console.log(playRound('paper',getComputerChoice()));
 })
 scissors.addEventListener('click', () => {
    console.log(playRound('paper',getComputerChoice()));
 })
