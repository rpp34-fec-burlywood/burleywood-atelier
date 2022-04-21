/* eslint-disable react/prop-types */
import React from 'react';
import CarouselItem from './carouselItem.jsx';
const MAX_CAROUSEL_LENGTH = 7;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowIndex: 0,
      maxSlides: 0,
      slidePercentage: 0
    };

    this.renderCarousel = this.renderCarousel.bind(this);
    this.downArrowClick = this.downArrowClick.bind(this);
    this.upArrowClick = this.upArrowClick.bind(this);
  }


  renderCarousel(mainImageIndex) {

    var counter = 0;
    var carousel = this.props.selectedPhotos.map((photo, index) => {
      if (index === mainImageIndex) {
        counter++;
        return (
          <CarouselItem imgUrl={photo.thumbnail_url} index={index} active={true} key={index} />
        );
      }
      return (
        <CarouselItem imgUrl={photo.thumbnail_url} index={index} active={false} key={index} />
      );
    });

    return carousel;
  }

  downArrowClick() {
    var newWindowIndex = this.state.windowIndex < this.state.maxSlides ? this.state.windowIndex + 1 : 0;
    this.setState({
      windowIndex: newWindowIndex
    })
  }

  upArrowClick() {
    var newWindowIndex = this.state.windowIndex > 0 ? this.state.windowIndex - 1 : this.state.maxSlides;
    this.setState({
      windowIndex: newWindowIndex
    })
  }

  componentDidMount() {
    var maxSlides = this.props.selectedPhotos.length - MAX_CAROUSEL_LENGTH;
    this.setState({
      maxSlides,
      slidePercentage: 100 / MAX_CAROUSEL_LENGTH
    })
  }

  render() {
    if (this.props.selectedPhotos.length > MAX_CAROUSEL_LENGTH) {
      return (
        <div className="carousel">
          <button id="carouselUp" onClick={this.upArrowClick}>
            <div className="arrow">&#10092;</div>
          </button>
          <div className="carouselContainer">
            <div className="carSlider"
              style={{ transform: `translateY(-${this.state.windowIndex * this.state.slidePercentage}%)` }}>
              {this.renderCarousel(this.props.mainImageIndex)}
            </div>
          </div>
          <button id="carouselDown" onClick={this.downArrowClick}>
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