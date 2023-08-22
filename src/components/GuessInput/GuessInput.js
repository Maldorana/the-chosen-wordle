import React, { useRef, useState, useEffect } from 'react';
import classes from './GuessInput.module.scss';

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = useState('');
  const inputRef = useRef(null);

  // Auto-focus on the input field when mounting
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handlers
  // Input change handler
  const handleInputChange = (e) => {
    const inputValue = e.target.value.toUpperCase();

    // Only change input value for letters
    if (/^[a-zA-Z]{0,5}$/.test(inputValue)) {
      setGuess(inputValue);
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    setGuess(guess);
    handleSubmitGuess(guess);
    setGuess('');
    inputRef.current.focus();
  };

  return (
    <form
      className={classes['guess-input-wrapper']}
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor='submit-guess'>Enter guess:</label>
      <input
        required
        ref={inputRef}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        id='submit-guess'
        title='5 letter word'
        value={guess}
        onChange={(e) => handleInputChange(e)}
      ></input>
    </form>
  );
}

export default GuessInput;
