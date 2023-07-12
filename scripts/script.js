function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function updateScore(playerScore, computerScore) {
  const scoreboard = document.getElementById('scoreboard');
  const results = document.getElementById('results');
  scoreboard.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;

  if (playerScore >= 5) {
    scoreboard.innerHTML += "<br>You win the game!";
    disableButtons();
    playAgainButton.style.display = "block";
  } else if (computerScore >= 5) {
    scoreboard.innerHTML += "<br>You lose the game!";
    disableButtons();
    playAgainButton.style.display = "block";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore(playerScore, computerScore);
  results.textContent = "";
  playAgainButton.style.display = "none";
  enableButtons();
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const results = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');

rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const roundResult = playRound('rock', computerSelection);
  results.textContent = roundResult;

  if (roundResult.includes('Win')) {
    playerScore++;
  } else if (roundResult.includes('Lose')) {
    computerScore++;
  }

  updateScore(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const roundResult = playRound('paper', computerSelection);
  results.textContent = roundResult;

  if (roundResult.includes('Win')) {
    playerScore++;
  } else if (roundResult.includes('Lose')) {
    computerScore++;
  }

  updateScore(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const roundResult = playRound('scissors', computerSelection);
  results.textContent = roundResult;

  if (roundResult.includes('Win')) {
    playerScore++;
  } else if (roundResult.includes('Lose')) {
    computerScore++;
  }

  updateScore(playerScore, computerScore);
});

playAgainButton.addEventListener('click', resetGame);

let playerScore = 0;
let computerScore = 0;

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}
