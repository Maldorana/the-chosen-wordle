import React from 'react';
import { range } from '../../utils';
import classes from './Keyboard.module.scss';
import classnames from 'classnames';

function Keyboard({ lettersStatus }) {
  const keyClass = (key) => {
    return lettersStatus[key].status
      ? classnames(classes['keyboardKey'], {
          [lettersStatus[key].status]: lettersStatus[key].status,
        })
      : classes['keyboardKey'];
  };
  console.log(lettersStatus);

  return (
    <div className={classes['keyboard']}>
      <div className={classes['keyboardLine']}>
        {range(10).map((key) => {
          return (
            <div className={keyClass(key)} key={`line1-${key}`}>
              {lettersStatus[key].letter}
            </div>
          );
        })}
      </div>
      <div className={classes['keyboardLine']}>
        <div className={classes['keyboardHalfSpace']}></div>
        {range(9).map((key) => {
          const adjustedKey = key + 10;
          return (
            <div className={keyClass(adjustedKey)} key={`line2-${key}`}>
              {lettersStatus[adjustedKey].letter}
            </div>
          );
        })}
        <div className={classes['keyboardHalfSpace']}></div>
      </div>
      <div className={classes['keyboardLine']}>
        <div className={classes['keyboardSpace']}></div>
        {range(7).map((key) => {
          const adjustedKey = key + 19;
          return (
            <div className={keyClass(adjustedKey)} key={`line3-${key}`}>
              {lettersStatus[adjustedKey].letter}
            </div>
          );
        })}
        <div className={classes['keyboardSpace']}></div>
      </div>
    </div>
  );
}

export default Keyboard;
