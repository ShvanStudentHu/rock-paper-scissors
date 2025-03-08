const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");

const container = document.querySelector(".container");
const resultPara = document.createElement("p");
const resultSpan = document.createElement("span");

// container.appendChild(resultPara);
// resultPara.textContent = `player ${humanScore}`;

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

function playGame(playerChoice) {
  const player = playerChoice;
  const cpu = getComputersChoice();
  resultSpan.textContent = `CPU choose ${cpu}`;
  playRound(player, cpu);
  if (humanScore >= 5) {
    resultPara.textContent = `Human WINS!`;
    (humanScore = 0), (cpuScore = 0);
  } else if (cpuScore >= 5) {
    resultPara.textContent = `CPU WINS!`;
    (humanScore = 0), (cpuScore = 0);
  }
}

function playRound(playerOne, computerChoice) {
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
  changeValue();
  return console.log(humanScore);
}

rockButton.addEventListener("click", () => {
  const humanChoice = "rock";
  playGame(humanChoice);
});

paperButton.addEventListener("click", () => {
  const humanChoice = "paper";
  playGame(humanChoice);
});

scissor.addEventListener("click", () => {
  const humanChoice = "scissors";
  playGame(humanChoice);
});

container.appendChild(resultPara);
container.append(resultSpan);

function changeValue() {
  resultPara.textContent = `player: ${humanScore} CPU: ${cpuScore}`;
}
