/* eslint-disable react/prop-types */
import React from 'react';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);

    this.genId = this.genId.bind(this);
  }

  genId(mainImageIndex, index) {
    if (mainImageIndex === index) {
      return 'carouselItemActive';
    }
    return '';
  }

  render() {
    return (
      <img className='carouselItem'
        id={this.genId(this.props.mainImageIndex, this.props.index)}
        src={this.props.imgUrl} index={this.props.index} />
    );
  }
}

export default CarouselItem;