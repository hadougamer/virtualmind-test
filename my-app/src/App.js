import './App.css';
import React from 'react';
import { useState } from 'react';

import PlayerDetailsControllerAsync from './modules/PlayerDetailsControllerAsync';
import PlayerDetailsControllerPromise from './modules/PlayerDetailsControllerPromise';

const loadPlayersAsync = ( setPlayers ) => {
  // Clean Players
  setPlayers([]);;

  PlayerDetailsControllerAsync.showTeammatesClick()
  .then((players) => {
    setPlayers( players );
  });
}

const loadPlayersPromise = ( setPlayers ) => {
  // Clean Players
  setPlayers([]);;

  PlayerDetailsControllerPromise.showTeammatesClick()
  .then((players) => {
    setPlayers( players );
  });
}


const App: React.FC = () => {
  const [ players, setPlayers ] = useState([]);

  return (
    <>
      <ul>
        {
          players.map((player) => {
            return (<li key={player.id} >{ `${ player.name } (${ player.id })` }</li>);
          })
        }
      </ul>
      <div className="App">
        <button 
          className={'button'} 
          onClick={ () => { 
            loadPlayersAsync( setPlayers ) 
            } 
          }
        >Load Players (async)</button>
      </div>

      <div className="App">
        <button 
          className={'button'} 
          onClick={ () => { 
            loadPlayersPromise( setPlayers ) 
            } 
          }
        >Load Players (promise)</button>
    </div>
    </>
  );
};

export default App;
