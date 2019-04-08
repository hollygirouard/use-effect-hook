import React, { Component } from 'react';
import FunctionBasedComponent from './components/FunctionBasedComponent';
// import ClassBasedComponent from './components/Class-Based-Component';
import Logo from './assets/alligator-logo2.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={ Logo } alt="Alligator.io Logo" width="200" />
        <h1>useEffect Hook</h1>
        <FunctionBasedComponent />
      </div>
    );
  }
}

export default App;
