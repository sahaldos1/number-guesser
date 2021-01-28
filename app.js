//game values
let min = 1,
  max = 10,
  winningNum = getWinningNum(min, max),
  guessesLeft = 3;

//UI elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-button"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listnere
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Plese enter a number between ${min} and ${max}`, "red");
  }

  //check if right
  if (guess === winningNum) {
    gameOver(true, `${winningNum} was correct, you win!`);
  } else {
    // wrong guess
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // game lost

      gameOver(
        false,
        `Game Over, you lost The correct number was ${winningNum}`
      );
    } else {
      // continue game

      guessInput.style.borderColor = "orange";

      // clear input
      guessInput.value = "";

      setMessage(`Guess is not correct, ${guessesLeft} guesses left`, "orange");
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won == true ? (color = "green") : "red";

  // disable input
  guessInput.disabled = true;
  // changer border color
  guessInput.style.borderColor = color;
  // set message
  setMessage(msg, color);

  // play again

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Get winning number
function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
