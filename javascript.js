console.log("hi");

function getComputersChoice() {
  let cpuAnswer = Math.random();
  let finalAnswer = null;
  console.log(cpuAnswer);
  if (cpuAnswer < 0.33) {
    finalAnswer = "rock";
  } else if (cpuAnswer > 0.33 && cpuAnswer < 0.66) {
    finalAnswer = "paper";
  } else {
    finalAnswer = "scissors";
  }
  return finalAnswer;
}
