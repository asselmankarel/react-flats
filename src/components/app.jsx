import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: null
    };
  }

  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  render() {
    let center = { lat: 48.864716, lng: 2.349014 };
    const { selectedFlat } = this.state;
    if (selectedFlat) {
      center = {
        lat: selectedFlat.lat,
        lng: selectedFlat.lng
      };
    }
    return (
      <div className="app">
        <FlatList flatList={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact center={center} zoom={12}>
            {this.state.flats.map((flat) => {
              return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.name} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
