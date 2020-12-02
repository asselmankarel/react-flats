import React, { Component } from 'react';

class Flat extends Component {
  handleClicked = () => {
    this.props.handleFlatClicked(this.props.flat);
  }

  render() {
    const { flat } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')`
    };
    return (
      <div className="card" style={style} onClick={this.handleClicked}>
        <div className="card-category">
          €
          {flat.price}
        </div>
        <h2>{flat.name}</h2>
      </div>
    );
  }
}

export default Flat;
