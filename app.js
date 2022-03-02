const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
let gameDisplay = document.getElementById("gameDisplay");

function compChoice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 is rock
// 2 is scissors
// 3 is paper

// const gameArray = [0, 1, 2];
// let compChoice;

function chooseRock() {
  compValue = compChoice(1, 3);
  if (compValue === 1) {
    gameDisplay.innerHTML = "Computer Chose Rock. You tied!";
  } else if (compValue === 2) {
    gameDisplay.innerHTML = "Computer Chose Scissors. You win!";
  } else if (compValue === 3) {
    gameDisplay.innerHTML   = "Computer Chose Paper. You lose!";
  }
}

function choosePaper() {
  compValue = compChoice(1, 3);
  if (compValue === 1) {
    gameDisplay.innerHTML = "Computer Chose Rock. You win!";
  } else if (compValue === 2) {
    gameDisplay.innerHTML = "Computer Chose Scissors. You lose!";
  } else if (compValue === 3) {
    gameDisplay.innerHTML   = "Computer Chose Paper. You tied!";
  }
}

function chooseScissors() {
  compValue = compChoice(1, 3);
  if (compValue === 1) {
    gameDisplay.innerHTML = "Computer Chose Rock. You lose!";
  } else if (compValue === 2) {
    gameDisplay.innerHTML = "Computer Chose Scissors. You tied!";
  } else if (compValue === 3) {
    gameDisplay.innerHTML   = "Computer Chose Paper. You win!";
  }
}

// function endGame(compChoice) {
//     console.log(compChoice);
// }

// This is the random choice generator. Use this later!
// let compChoice = Math.floor(Math.random()*gameArray.length);
// return compChoice;

rockBtn.addEventListener("click", chooseRock);
paperBtn.addEventListener("click", choosePaper);
scissorsBtn.addEventListener("click", chooseScissors);
