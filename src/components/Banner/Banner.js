import React from 'react';
import classes from './Banner.module.scss';
import classnames from 'classnames';

function Banner({ gameStatus, numOfGuesses, answer }) {
  return (
    <>
      {gameStatus === 'win' && (
        <div className={classnames(classes['banner'], classes['happy'])}>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numOfGuesses} guesses</strong>.
          </p>
          <a href='/'>Play again</a>
        </div>
      )}
      {gameStatus === 'lose' && (
        <div className={classnames(classes['banner'], classes['sad'])}>
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
