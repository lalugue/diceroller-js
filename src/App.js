import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';

const RollButton = () => <Button color='facebook'>Roll Dice</Button>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RollButton/>
      </header>
      
    </div>
  );
}

export default App;
