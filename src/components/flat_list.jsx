import React, { PureComponent } from 'react';
import Flat from './flat';

class FlatList extends PureComponent {
  handleFlatClicked = (flat) => {
    console.log(flat);
    this.props.selectFlat(flat);
  }

  render() {
    const { flatList } = this.props;
    return (
      <div className="flat-list">
        {flatList.map((flat) => {
          return <Flat flat={flat} key={flat.name} handleFlatClicked={this.handleFlatClicked} />;
        })}
      </div>
    );
  }
}

export default FlatList;
