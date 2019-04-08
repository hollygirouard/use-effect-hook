import React from 'react';
import ClassBasedComponent from './components/Class-Based-Component';
// import FunctionBasedComponent from './components/FunctionBasedComponent';
import Logo from './assets/alligator-logo2.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={ Logo } alt="Alligator.io Logo" width="200" />
        <h1>useEffect Hook</h1>
        <ClassBasedComponent />
      </div>
    );
  }
}

export default App;
