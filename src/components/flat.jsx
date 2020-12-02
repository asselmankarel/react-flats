import React, { PureComponent } from 'react';

class Flat extends PureComponent {
  render() {
    const { flat } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')`
    };
    return (
      <div className="card" style={style}>
        <div className="card-category">
          €
          {flat.price}
        </div>
        <h2>{flat.name}</h2>
        <a className="card-link" href="/">More info</a>
      </div>
    );
  }
}

export default Flat;
