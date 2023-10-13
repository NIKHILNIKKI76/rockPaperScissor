

const n = prompt("enter the number of games");

const lives = document.querySelector("#lives");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const winnerText = document.querySelector("#winner");
lives.textContent = `GameContent : ${n}`;

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

choiceBtns.forEach(button => button.addEventListener("click",()=>{
    if(gamesPlayed < n){
        gamesPlayed++;
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
        lives.textContent = `GamesPlayed : ${gamesPlayed}`;
        document.getElementById("playerOne").textContent = `playerScore : ${playerScore}`;
        document.getElementById("computer").textContent = `computerScore : ${computerScore}`;

    }
    if(gamesPlayed == n) {
        displayFinalResult();
    }
}));


function computerTurn(){
    const randNum = Math.floor(Math.random()*3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;
    }
}

function checkWinner(){
    if(player == computer) {
        return "Draw!";
    }
    else if(computer == "ROCK"){
        if(player == "PAPER"){
            playerScore++;
            return "YOU WIN!";
        }
        else {
            computerScore++;
           return "YOU LOSE!";
        }
    }else if(computer == "PAPER"){
        if(player == "SCISSOR"){
            playerScore++;
            return "YOU WIN!";
        }
        else {
            computerScore++;
           return "YOU LOSE!";
        }
    }else if(computer == "SCISSOR"){
        if(player == "ROCK"){
            playerScore++;
            return "YOU WIN!";
        }
        else {
            computerScore++;
           return "YOU LOSE!";
        }
    }
}

function displayFinalResult() {
    if (playerScore > computerScore) {
        winnerText.textContent = "You won the series!";
    } else if (playerScore < computerScore) {
        winnerText.textContent = "Computer won the series!";
    } else {
        winnerText.textContent = "The series ended in a tie!";
    }
}