import React, { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const keyboardLetters = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];

  const lettersStatusInitialState = [];
  for (const letter of keyboardLetters) {
    lettersStatusInitialState.push({ letter: letter, status: '' });
  }

  const [guesses, setGuesses] = useState([]);
  const [lettersStatus, setLettersStatus] = useState(lettersStatusInitialState);
  const [gameStatus, setGameStatus] = useState('');

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    const checking = checkGuess(guess, answer);
    const nextLettersStatus = [...lettersStatus];

    const finalLettersStatus = nextLettersStatus.map((letterObj) => {
      const checkObj = checking.find((obj) => obj.letter === letterObj.letter);
      if (checkObj) {
        return { ...letterObj, status: checkObj.status };
      }
      return letterObj;
    });

    setLettersStatus(finalLettersStatus);

    if (guess === answer) {
      setGameStatus('win');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {!gameStatus && <GuessInput handleSubmitGuess={handleSubmitGuess} />}
      {!gameStatus && <Keyboard lettersStatus={lettersStatus} />}
      {gameStatus && (
        <Banner
          gameStatus={gameStatus}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
