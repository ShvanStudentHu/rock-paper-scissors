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
  if (
    userInput === "rock" ||
    userInput === "ROCK" ||
    userInput === "paper" ||
    userInput === "PAPER" ||
    userInput === "scissors" ||
    userInput === "SCISSORS"
  ) {
    return userInput;
  } else {
    return console.log("invalid input");
  }
}

let humanScore = 0;
let cpuScore = 0;

function playGame() {
  let n = 0;
  while (n < 5) {
    const player = humanChoice();
    const cpu = getComputersChoice();
    playRound(player, cpu);
    n++;
  }
  if (humanScore > cpuScore) {
    console.log("player wins");
  } else if (humanScore < cpuScore) {
    console.log("CPU WINS!");
  } else {
    console.log("ITS A DRAW!");
  }
  return (humanScore = 0), (cpuScore = 0);
}

function playRound(playerOne, computerChoice) {
  console.log(
    `player's choice ${playerOne} computer's choice ${computerChoice}`
  );
  if (playerOne === computerChoice) {
    console.log("its a draw!!");
  } else if (playerOne === "rock" && computerChoice === "paper") {
    console.log("paper wins");
    //computer wins
    cpuScore++;
  } else if (playerOne === "paper" && computerChoice === "rock") {
    console.log("paper wins");
    humanScore++;
  } else if (playerOne === "scissors" && computerChoice === "rock") {
    console.log("rock! wins");
    //computer wins
    cpuScore++;
  } else if (playerOne === "rock" && computerChoice === "scissors") {
    console.log("rock wins");
    humanScore++;
  } else if (playerOne === "paper" && computerChoice === "scissors") {
    console.log("scissor wins");
    //computer wins
    cpuScore++;
  } else if (playerOne === "scissors" && computerChoice === "paper") {
    console.log("scissors wins");
    humanScore++;
  } else {
    console.log("nothing");
  }
}
