import React, { Component } from 'react';
import Flat from './flat';
import flats from '../../data/flats';

class FlatList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flatList: flats
    };
  }

  render() {
    const { flatList } = this.state;
    return (
      <div className="flat-list">
        {flatList.map((flat) => {
          return <Flat flat={flat} key={flat.name} />;
        })}
      </div>
    );
  }
}

export default FlatList;
