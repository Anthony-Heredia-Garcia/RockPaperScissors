const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", chooseRock, endGame);
paperBtn.addEventListener("click", choosePaper);
scissorsBtn.addEventListener("click", chooseScissors);

const gameArray = ['Rock', 'Paper', 'Scissors'];


function chooseRock (gameArray) {
    let compChoice = Math.floor(Math.random()*gameArray.length);
    return compChoice; 
}


function choosePaper () {
    alert ("Paper");
}

function chooseScissors () {
    alert ("Scissors");
}

function endGame(compChoice) {
    console.log(compChoice);
}





// function chooseRock (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);      
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
