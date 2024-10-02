let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const winnerParagraph = document.getElementById('winner');
const playerChoiceSpan = document.getElementById('player-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const resetButton = document.getElementById('reset');
const choices = document.querySelectorAll('.choice');


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function updateGame(playerChoice) {
    const computerChoice = getComputerChoice();
    
    // Update player's and computer's choices
    playerChoiceSpan.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceSpan.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    
    // Determine the winner and update the result (only show "You win!", "Computer wins!", or "It's a tie!")
    const result = determineWinner(playerChoice, computerChoice);
    winnerParagraph.textContent = result;
    
    // Update the scores
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        updateGame(playerChoice);
    });
});

// Reset game function
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    
    // Reset score display
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    
    // Reset choices and result display
    playerChoiceSpan.textContent = 'None';
    computerChoiceSpan.textContent = 'None';
    winnerParagraph.textContent = 'Make a choice to start the game!';
});
