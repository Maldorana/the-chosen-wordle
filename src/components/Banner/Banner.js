import React from 'react';

function Banner({ gameStatus, numOfGuesses, answer }) {
  return (
    <>
      {gameStatus === 'win' && (
        <div class='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numOfGuesses} guesses</strong>.
          </p>
          <a href='/'>Play again</a>
        </div>
      )}
      {gameStatus === 'lose' && (
        <div class='sad banner'>
          <p>
            Sorry, the correct answer was <strong>{answer}</strong>.
          </p>
          <a href='/'>Play again</a>
        </div>
      )}
    </>
  );
}

export default Banner;
