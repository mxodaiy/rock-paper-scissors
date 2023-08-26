let playerScoreBoard =  document.querySelector('#result>.player>.score');
let machineScoreBoard = document.querySelector('#result>.machine>.score');
let drawBoard =         document.querySelector('#result>.draw>.score');

let imgPlayerHand =  document.querySelector('#battleField>.player');
let imgMachineHand = document.querySelector('#battleField>.machine');

function scoreBoard(playerScore, machineScore){
    playerScoreBoard.textContent = playerScore;
    machineScoreBoard.textContent = machineScore;
    drawBoard.textContent = nPlayed - playerScore - machineScore;
}

function refree(playerSelection, machineSelection){
    imgPlayerHand.src =  `./img/${playerSelection}.svg`;
    imgMachineHand.src = `./img/${machineSelection}.svg`;

    imgPlayerHand.classList.remove('animateWave')
    imgMachineHand.classList.remove('animateWave')

    imgPlayerHand.classList.add('hand', `${playerSelection}`)
    imgMachineHand.classList.add('hand', `${machineSelection}`)

    if (machineSelection !== playerSelection){
        if ((playerSelection === "rock" && machineSelection === "scissors")
        || (playerSelection === "paper" && machineSelection === "rock")
        || (playerSelection === "scissors" && machineSelection === "paper")) {
            imgPlayerHand.classList.add('animateWave')
            playerScore++            
        }else{
            imgMachineHand.classList.add('animateWave')
            machineScore++
        }
    }
    nPlayed++;
    scoreBoard(playerScore, machineScore)
}

function getComputerChoice(){
    choices = ["rock", "paper","scissors"];
    i = Math.floor(Math.random()*3);
    return choices[i]
}

function playRound(playerSelection){
    machineSelection = getComputerChoice();
    refree(playerSelection, machineSelection);
    if (nPlayed >= nRounds){
        gameOver(nRounds)
    }
}

function gameOver(nRounds){
    if (playerScore > machineScore){
        document.querySelector('#result>.player').classList.add('animateBlink');
    }else if (playerScore < machineScore){
        document.querySelector('#result>.machine').classList.add('animateBlink');
    }else{
        document.querySelector('#result>.draw').classList.add('animateBlink');
    }

    imgPlayerHand.classList.remove('animateWave')
    imgMachineHand.classList.remove('animateWave')
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
        document.querySelector(`#result>.${item}`).classList.remove('animateBlink'))

    imgPlayerHand.src  = '';
    imgMachineHand.src = '';
    ['rock','paper','scissors'].forEach(item =>{
        imgPlayerHand.classList.remove('hand', `${item}`)
        imgMachineHand.classList.remove('hand', `${item}`)
    })

    nRounds = parseInt(document.getElementById('nRounds').value);
});