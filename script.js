let playerScoreBoard =  document.querySelector('#result>.player>.score');
let machineScoreBoard = document.querySelector('#result>.machine>.score');
let drawBoard =         document.querySelector('#result>.draw>.score');

function scoreBoard(playerScore, machineScore){
    playerScoreBoard.textContent = playerScore;
    machineScoreBoard.textContent = machineScore;
    drawBoard.textContent = nPlayed - playerScore - machineScore;
}

function refree(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection !== playerSelection){
        if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++            
        }else{
            machineScore++
        }
    }
    scoreBoard(playerScore, machineScore)
}

function getComputerChoice(){
    choices = ["Rock", "Paper","Scissors"];
    i = Math.floor(Math.random()*3);
    return choices[i]
}

function playRound(playerSelection){
    nPlayed++;
    computerSelection = getComputerChoice();
    refree(playerSelection, computerSelection);
    if (nPlayed === nRounds) { gameOver(nRounds) }
}

function gameOver(nRounds){
    if (playerScore > machineScore){
        document.querySelector('#result>.player').classList.add('animateResult');
    }else if (playerScore < machineScore){
        document.querySelector('#result>.machine').classList.add('animateResult');
    }else{
        document.querySelector('#result>.draw').classList.add('animateResult');
    }
}

['rock','paper','scissors'].forEach((hand) =>{
    const selector = `button>.${hand}`;
    const elem = document.querySelector(selector);
    elem.addEventListener('click',() => playRound(`${hand}`))
});

document.getElementById('play').addEventListener('click',() => {
    nPlayed       = 0;
    playerScore   = 0;
    machineScore  = 0;

    scoreBoard(playerScore, machineScore);

    ['player','machine','draw'].forEach((item) =>
        document.querySelector(`#result>.${item}`).classList.remove('animateResult'));

    nRounds = parseInt(document.getElementById('nRounds').value);
});