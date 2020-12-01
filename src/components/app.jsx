import React, { Component } from 'react';
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  render() {
    return (
      <div className="app">
        <Flat name="Charm at the Steps of the Sacre Coeur/Montmartre" price={299} />
      </div>
    );
  }
}

export default App;
