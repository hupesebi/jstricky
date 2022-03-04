function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let end = false;
  let guess = 0;

  return function guess(num) {
    if (end) return "The game is over, you already won!";
    guess++;
    if (num === answer) {
      end = true;
      const guess = guess === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${guess} ${guess}.`;
    }
    if (num < answer) return `${num} is too low!`;
    if (num > answer) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
