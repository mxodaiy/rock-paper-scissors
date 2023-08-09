function getComputerChoice(){
    choices = ["Rock", "Paper","Scissors"];
    i = Math.floor(Math.random()*3);
    return choices[i]
}



function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection === playerSelection){
        return `Draw!`
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }else{
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game(){
    nRounds = parseInt(prompt("How many games do you want to play?",5))
    for (let i = 1; i <= nRounds; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper or Scissors?");
        console.log(playRound(computerSelection,playerSelection));
    }
}
