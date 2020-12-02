import React, { PureComponent } from 'react';

class Marker extends PureComponent {
  render() {
    return (
      <div className="marker">
        {this.props.text}
      </div>
    );
  }
}

export default Marker;
