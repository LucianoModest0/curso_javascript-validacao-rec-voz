function verifyGuess(guess) {
  const number = +guess;

  if (invalidGuess(number)) {
    guessElement.innerHTML += `<div> invalid value, not a number </div>`;
  }

  if (outOfRangeNumber(number)) {
    guessElement.innerHTML += `<div> invalid value, value out of range </div>`;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
        <h2> Right guess! </h2>
        <h3> The secret number was ${secretNumber} </h3>

        <button id="play-again" class="btn-play"> Play Again </button>
    `;
  } else if (number > secretNumber) {
    guessElement.innerHTML += `
        <div>The secret number is smaller <i class="fa-solid fa-arrow-down"></i></div>
    `;
  } else {
    guessElement.innerHTML += `
        <div>The secret number is bigger <i class="fa-solid fa-arrow-up"></i></div>
    `;
  }
}

function invalidGuess(number) {
  return Number.isNaN(number);
}

function outOfRangeNumber(number) {
  return number > bValue || number < sValue;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload();
  }
});
