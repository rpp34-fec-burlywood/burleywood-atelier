/* eslint-disable react/prop-types */
import React from 'react';
import CarouselItem from './carouselItem.jsx';
const MAX_CAROUSEL_LENGTH = 7;

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    /** windowIndex < maxSlides */
    this.state = {
      windowIndex: 0,
      maxSlides: 0,
      slidePercentage: 0
    };

    this.renderCarousel = this.renderCarousel.bind(this);
    this.transformCarousel = this.transformCarousel.bind(this);
  }


  renderCarousel(mainImageIndex) {

    var carousel = this.props.selectedPhotos.map((photo, index) => {
      return (
        <CarouselItem imgUrl={photo.thumbnail_url} index={index} mainImageIndex={mainImageIndex} key={index} />
      );
    });

    return carousel;
  }

  /**OPTIMIZATION, use a function to perform the TRANSFORM, if the index is already in teh display area,
   no transform is needed*/
  transformCarousel(windowIndex, slidePercentage) {
    var element = document.getElementById('carouselContainer');
    var scrollPercent = (100 * element.scrollTop / (element.scrollHeight - element.clientHeight));
    var desired = this.props.windowIndex * this.props.slidePercentage;
    console.log(desired, scrollPercent)
    // return {
    //   transform: `translateY(${}%)`
    // }
  }

  render() {
    // console.log('RENDERED CAROUSEL');
    if (this.props.selectedPhotos.length > MAX_CAROUSEL_LENGTH) {
      return (
        <div className="carousel">
          <button id="carouselUp" onClick={this.props.upArrowClick}>
            <div className="arrowY">&#10092;</div>
          </button>
          <div id="carouselContainer" className="carouselContainer">
            <div id="carSlider" className="carSlider"
              style={{ transform: `translateY(-${this.props.windowIndex * this.props.slidePercentage}%)` }}
              onClick={this.props.carouselClickhandler}>
              {this.renderCarousel(this.props.mainImageIndex)}
            </div>
          </div>
          <button id="carouselDown" onClick={this.props.downArrowClick}>
            <div className="arrowY">&#10093;</div>
          </button>
        </div>
      );
    }
    return (
      <div className="carousel">
        <div className="carSlider"
          onClick={this.props.carouselClickhandler}>
          {this.renderCarousel(this.props.mainImageIndex)}
        </div>
      </div>
    );

  }
}

export default Carousel;