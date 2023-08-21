import React from 'react';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes['header']}>
      <h1>The Chosen Wordle</h1>
      <p>
        A <em>Buffy the Vampire Slayer</em> wordle game
      </p>
    </header>
  );
}

export default Header;
