console.log("hi");

function getComputersChoice() {
  let cpuAnswer = Math.random();
  let finalAnswer = null;
  if (cpuAnswer < 0.33) {
    finalAnswer = "rock";
  } else if (cpuAnswer > 0.33 && cpuAnswer < 0.66) {
    finalAnswer = "paper";
  } else {
    finalAnswer = "scissors";
  }
  return finalAnswer;
}

function humanChoice() {
  let userInput = prompt("User input:");
  return userInput;
}

function game() {
  let playerOne = humanChoice();
  let computerChoice = getComputersChoice();
  console.log(
    `player's choice ${playerOne} computer's choice${computerChoice}`
  );

  if (playerOne === computerChoice) {
    console.log("its a draw!!");
  } else if (playerOne === "rock" && computerChoice === "paper") {
    console.log("paper wins");
  } else if (playerOne === "paper" && computerChoice === "rock") {
    console.log("paper wins");
  } else if (playerOne === "scissors" && computerChoice === "rock") {
    console.log("rock! wins");
  } else if (playerOne === "rock" && computerChoice === "scissors") {
    console.log("rock wins");
  } else if (playerOne === "paper" && computerChoice === "scissors") {
    console.log("scissor wins");
  } else if (playerOne === "scissors" && computerChoice === "paper") {
    console.log("scissors wins");
  } else {
    console.log("invalid input");
  }
}
