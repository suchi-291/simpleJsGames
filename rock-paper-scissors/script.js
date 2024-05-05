"use strict";
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let userChoice;
let computerChoice;
let result;
/*const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");


btnRock.addEventListener('click', function(){

})*/

//Step 2: The user choice must be displayed when the user clicks on any of the button among Rock, Paper and Scissors

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

//Step1: Generate computer Choice

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1); //we can also use possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
  console.log(computerChoice);
}

generateComputerChoice();

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You won!";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You won!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you Won!";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You Lost!";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You Lost!";
  }

  resultDisplay.innerHTML = result;
}
