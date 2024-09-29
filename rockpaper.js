function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textCont = {userChoice};
    document.getElementById('computer-choice').textContent = (computerChoice)

    let resultMessage = '';

    if (userChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "You lose!";
    }

    document.getElementById('result-message').textContent = resultMessage;
}