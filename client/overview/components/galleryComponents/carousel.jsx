/* eslint-disable react/prop-types */
import React from 'react';
import CarouselItem from './carouselItem.jsx';
const MAX_CAROUSEL_LENGTH = 7;

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
    if (this.props.selectedPhotos.length > MAX_CAROUSEL_LENGTH) {
      return(
        <div className="carousel">
          <button id="carouselUp">
            <div className="arrow">&#10092;</div>
          </button>
          <div className="carSlider">
            {this.renderCarousel(this.props.mainImageIndex)}
          </div>
          <button id="carouselDown">
            <div className="arrow">&#10093;</div>
          </button>
        </div>
      );
    }
    return (
      <div className="carousel">
        <div className="carSlider">
          {this.renderCarousel(this.props.mainImageIndex)}
        </div>
      </div>
    );

  }
}

export default Carousel;