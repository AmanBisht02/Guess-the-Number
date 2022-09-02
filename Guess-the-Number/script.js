////////// Secret number //////////

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

////////// Default Score //////////

let score = 20;
let highscore = 0;

////////// Display Message function //////////

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

////////// Buttons //////////

/// Check Button ///
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  /// Again! Button ///

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

    displayMessage('Start Guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

  ////////// Print message //////////

  if (!guess) {
    displayMessage(' ⛔ NO Number');
  }

  ///// If Correct Answer /////
  else if (guess === secretNumber) {
    displayMessage(' 🎉 Correct Answer');

    /// Secret number reveal ///
    document.querySelector('.number').textContent = secretNumber;

    /// Style change ///
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    /// Highscore ///
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  /// If Score is High or Low ///
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }

    /// If Lost ///
    else {
      displayMessage(' 🍭 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
