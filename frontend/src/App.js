import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'unify-react-mobile/build/Button'
import NavBar from 'unify-react-mobile/build/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar inverted
            title="Text Goes Here"
            onBack="https://www.tokopedia.com"
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <Button transaction small>Transaction Small</Button>
      </div>
    );
  }
}

export default App;
