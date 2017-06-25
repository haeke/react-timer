import React, { Component } from 'react';
import logo from './logo.svg';
import Product from './Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Custom text
        </p>
        <div className="App-header">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
