import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Components
import Join from './Components/Join/Join';
import DifficultySelector from './Components/DifficultySelector/DifficultySelector'
import Game from './Components/Game/Game';

const App = () => {
  const [userName, setUserName] = useState('No Name');
  const [difficulty, setDifficulty] = useState('easy')
  const [rank, setRank] = useState('Novice');
  const [highScore, setHighScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => (<Join setUserName={setUserName} userName={userName}/>)} />
          <Route path='/difficulty' render={(props) => (<DifficultySelector setDifficulty={setDifficulty}/>)} />
          <Route path='/game' render={(props) => (
          <Game 
              difficulty={difficulty}
              userName={userName}
              rank={rank} 
              setRank={setRank} 
              highScore={highScore} 
              setHighScore={setHighScore}
              points={points}
              setPoints={setPoints}
              mistakes={mistakes}
              setMistakes={setMistakes}
           />)}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;