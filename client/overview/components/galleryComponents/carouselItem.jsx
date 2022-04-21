/* eslint-disable react/prop-types */
import React from 'react';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.active) {
      return (
        <img className="carouselItem active" src={this.props.imgUrl} index={this.props.index} />
      );
    }
    return (
      <img className="carouselItem" src={this.props.imgUrl} index={this.props.index} />
    );
  }
}

export default CarouselItem;