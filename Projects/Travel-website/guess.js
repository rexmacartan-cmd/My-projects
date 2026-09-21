let secretNumber;

function newGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
}

newGame();

function checkGuess() {
    let guess = document.getElementById("guessInput").value;

    if (guess == secretNumber) {
        document.getElementById("result").textContent = "🎉 Congratulations!";

        newGame();
    } else if (guess < secretNumber) {
        document.getElementById("result").textContent = "Too low!";
    } else {
        document.getElementById("result").textContent = "Too high!";
    }
}