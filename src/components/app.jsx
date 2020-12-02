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
      selectedFlat: null,
      search: ''
    };
  }

  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: flats.filter(flat => new RegExp(event.target.value, "i").exec(flat.name))
    });
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
        <input type="text" className="search" value={this.state.search} onChange={this.handleSearch} placeholder="search.." />
        <FlatList flatList={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact center={center} zoom={12}>
            {this.state.flats.map((flat) => {
              return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.name} selected={flat === selectedFlat} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
