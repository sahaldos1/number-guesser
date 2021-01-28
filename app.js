//game values
let min = 1,
  max = 10,
  winningNum = 2,
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

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Plese enter a number between ${min} and ${max}`, "red");
  }

  //check if right
  if (guess === winningNum) {
    // disable input
    guessInput.disabled = true;
    // changer border color
    guessInput.style.borderColor = "green";
    // set message
    setMessage(`${winningNum} is correct!`, "green");
  }
});

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
