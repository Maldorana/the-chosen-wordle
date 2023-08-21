import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = useState('');

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
  };

  return (
    <form className='guess-input-wrapper' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='submit-guess'>Enter guess:</label>
      <input
        required
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        name='submit-guess'
        title='5 letter word'
        value={guess}
        onChange={(e) => handleInputChange(e)}
      ></input>
    </form>
  );
}

export default GuessInput;
