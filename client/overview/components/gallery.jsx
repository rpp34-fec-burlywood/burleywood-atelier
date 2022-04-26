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
          <Carousel
              mainImageIndex={this.props.mainImageIndex}
              selectedPhotos={this.props.selectedStyle.photos}
              carouselClickhandler={this.props.carouselClickhandler} />
          <MainImage selectedStyle={this.props.selectedStyle}
            mainImageIndex={this.props.mainImageIndex}
            arrowXClickHandler={this.props.arrowXClickHandler} />
          </div>
        </div>
      );
    }
    return <div id="productGallery"></div>
  }

}

export default Gallery;