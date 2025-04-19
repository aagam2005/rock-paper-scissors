const choices = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getWinner(userChoice, computerChoice);
    
        userChoiceDisplay.textContent = `You chose: ${capitalize(userChoice)}`;
        computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computerChoice)}`;
        winnerDisplay.textContent = result;
    
        updateScores(result);
});
});

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  }
  
  function getWinner(user, computer) {
    if (user === computer) return "It's a draw! 😐";
  
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'You win! 🎉';
    } else {
      return 'Computer wins! 😢';
    }
  }
  
  function updateScores(result) {
    if (result.includes('You win')) {
      userScore++;
      userScoreDisplay.textContent = userScore;
    } else if (result.includes('Computer wins')) {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }