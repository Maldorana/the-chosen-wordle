import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const cellArray = range(5);
  const checking = checkGuess(value, answer);

  return (
    <>
      <p className='guess'>
        {cellArray.map((cell) => {
          const cellClass = value ? `cell ${checking[cell].status}` : 'cell';

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
