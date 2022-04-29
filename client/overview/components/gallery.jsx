/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './galleryComponents/carousel.jsx';
import MainImage from './galleryComponents/mainImage.jsx';
const MAX_CAROUSEL_LENGTH = 7;


class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowIndex: 0,
      maxSlides: 0,
      slidePercentage: 0
    };

    this.downArrowClick = this.downArrowClick.bind(this);
    this.upArrowClick = this.upArrowClick.bind(this);
    this.trackMainImage = this.trackMainImage.bind(this);

  }

  downArrowClick() {
    var newWindowIndex = this.state.windowIndex < this.state.maxSlides ? this.state.windowIndex + 1 : this.state.maxSlides;
    this.setState({
      windowIndex: newWindowIndex
    })
  }

  upArrowClick() {
    var newWindowIndex = this.state.windowIndex > 0 ? this.state.windowIndex - 1 : 0;
    this.setState({
      windowIndex: newWindowIndex
    })
  }

  trackMainImage(newImageIndex) {
    var targetIndex = 0
    if (newImageIndex >= MAX_CAROUSEL_LENGTH) {
      targetIndex = newImageIndex - (MAX_CAROUSEL_LENGTH - 1);
    }
    this.setState({
      windowIndex: targetIndex
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle && prevProps.selectedStyle !== this.props.selectedStyle) {
      var maxSlides = this.props.selectedStyle.photos.length - MAX_CAROUSEL_LENGTH;
      this.setState({
        maxSlides,
        slidePercentage: 100 / MAX_CAROUSEL_LENGTH
      })
    }
  }


  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="productGallery">
          <div className="productImageBlock">
            <MainImage selectedStyle={this.props.selectedStyle}
              mainImageIndex={this.props.mainImageIndex}
              arrowXClickHandler={this.props.arrowXClickHandler}
              trackMainImage={this.trackMainImage} />
            <Carousel
              downArrowClick={this.downArrowClick}
              upArrowClick={this.upArrowClick}
              slidePercentage={this.state.slidePercentage}
              windowIndex={this.state.windowIndex}
              mainImageIndex={this.props.mainImageIndex}
              selectedPhotos={this.props.selectedStyle.photos}
              carouselClickhandler={this.props.carouselClickhandler} />
          </div>
        </div>
      );
    }
    return (
      <div id="productGallery">
        <div className="productImageBlock"></div>
      </div>
    );
  }
}

export default Gallery;