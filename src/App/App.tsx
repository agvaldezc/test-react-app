import React, { Component } from 'react';
import './App.scss';

import Piano from '../Piano/Piano';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Piano></Piano>
      </div>
    );
  }
}

export default App;
