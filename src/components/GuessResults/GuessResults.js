import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import classes from './GuessResults.module.scss';

function GuessResults({ guesses, answer }) {
  const linesArray = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className={classes['guess-results']}>
      {linesArray.map((line) => (
        <Guess key={`guess-${line}`} value={guesses[line]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
