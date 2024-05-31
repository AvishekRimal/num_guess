let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    const numberGrid = document.getElementById('numberGrid');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    // Create number buttons from 1 to 100
    for (let i = 1; i <= 100; i++) {
        const numberButton = document.createElement('div');
        numberButton.classList.add('number');
        numberButton.textContent = i;
        numberButton.addEventListener('click', () => makeGuess(i, numberButton));
        numberGrid.appendChild(numberButton);
    }

    function makeGuess(guess, button) {
        attempts++;
        
        if (guess < targetNumber) {
            feedback.textContent = "Your guess is too low. Try again!";
            button.classList.add('wrong');
        } else if (guess > targetNumber) {
            feedback.textContent = "Your guess is too high. Try again!";
            button.classList.add('wrong');
        } else {
            feedback.textContent = `Congratulations! You've guessed the correct number ${targetNumber}.`;
            attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
            button.style.backgroundColor = '#5cb85c';
            button.style.color = 'white';
            // Disable further clicks
            const allButtons = document.querySelectorAll('.number');
            allButtons.forEach(btn => btn.removeEventListener('click', makeGuess));
        }
    }
});
