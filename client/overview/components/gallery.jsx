/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './galleryComponents/carousel.jsx';
import MainImage from './galleryComponents/mainImage.jsx';


class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  // mainImage will need to be its own component for expanded view

  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="productGallery">
          <div className="productImageBlock">
            <MainImage selectedStyle={this.props.selectedStyle}
              mainImageIndex={this.props.mainImageIndex}
              arrowXClickHandler={this.props.arrowXClickHandler} />
            <Carousel
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