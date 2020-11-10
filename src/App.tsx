import React from 'react';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles'
import logo from './logo.svg';
import './App.css';
import Formula from './components/Formula';
import { MaskPosition, MaskType } from './enum'
import List from './components/List'
import Options from './components/Options'

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
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
          <Options />
          <Formula left={2} right={8} outcome={16} mask={MaskPosition.Left} />
          <List axis={2} step={9} maskType={MaskType.Random} />
          <List axis={13} step={16} />
        </body>
      </ThemeProvider>
    </div>
  );
}

export default App;
