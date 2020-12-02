import React, { PureComponent } from 'react';

class Marker extends PureComponent {
  render() {
    const { selected, text } = this.props;
    let classes = "marker";
    if (selected) {
      classes += " selected";
    }
    return (
      <div className={classes}>
        {text}
      </div>
    );
  }
}

export default Marker;
