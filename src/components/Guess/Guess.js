import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import classes from './Guess.module.scss';
import classnames from 'classnames';

function Guess({ value, answer }) {
  const cellArray = range(5);
  const checking = checkGuess(value, answer);

  return (
    <>
      <p className={classes['guess']}>
        {cellArray.map((cell) => {
          const cellClass = value
            ? classnames(classes['cell'], {
                [classes[checking[cell].status]]: checking[cell].status,
              })
            : classes['cell'];

          return (
            <span key={`letter-${cell}`} className={`${cellClass}`}>
              {value && value.length === 5 && value[cell]}
            </span>
          );
        })}
      </p>
    </>
  );
}

export default Guess;
