/* eslint-disable react/prop-types */
import React from 'react';
import CarouselItem from './carouselItem.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.renderCarousel = this.renderCarousel.bind(this)
  }


  renderCarousel(mainImageIndex){

    var counter = 0;
    var carousel = this.props.selectedPhotos.map((photo, index) => {
      if (index === mainImageIndex){
        counter++;
        return (
          <CarouselItem imgUrl={photo.thumbnail_url} index={index} active={true} key={index}/>
        );
      }
      return (
        <CarouselItem imgUrl={photo.thumbnail_url} index={index} active={false} key={index}/>
      );
    });

    return carousel;
  }

  render () {
    return(
      <div className="carousel">
        <div className="carSlider">
          {/* up arrow*/}
          {this.renderCarousel(this.props.mainImageIndex)}
          {/* down arrow*/}
        </div>
      </div>
    );
  }
}

export default Carousel;