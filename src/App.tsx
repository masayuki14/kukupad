import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Cell'
import Cell from './components/atomos/Cell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Cell val={5} />
        <Cell val={6} />
        <Cell val={30} />
      </body>
    </div>
  );
}

export default App;
