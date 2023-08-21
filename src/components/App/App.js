import Game from '../Game';
import Header from '../Header';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes['wrapper']}>
      <Header />

      <div className={classes['game-wrapper']}>
        <Game />
      </div>
    </div>
  );
}

export default App;
