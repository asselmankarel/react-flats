import React, { PureComponent } from 'react';

class Flat extends PureComponent {
  render() {
    const { name, price } = this.props;
    console.log(name);
    return (
      <div className="card" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg')" }}>
        <div className="card-category">{price}</div>
        <h2>{name}</h2>
        <a className="card-link" href="/">More info</a>
      </div>
    );
  }
}

export default Flat;
