function getComputerChoice(){
    choices = ["Rock", "Paper","Scissors"];
    i = Math.floor(Math.random()*3);
    return choices[i]
}

function battle(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection === playerSelection){
        return "Draw!"
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You won! ${playeSelection} beats ${computerSelection}."
    }else{
        return "You lose! ${computerSelection} beats ${playeSelection}."
    }
}