/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './galleryComponents/carousel.jsx';
import './galleryComponents/gallery.css'


class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="productGallery">
          <div className="productImageBlock">
            <img className="mainImage"
              src={this.props.selectedStyle.photos[this.props.mainImageIndex].url}>
            </img>
            <Carousel
              mainImageIndex={this.props.mainImageIndex}
              selectedPhotos={this.props.selectedStyle.photos}
              carouselClickhandler={this.props.carouselClickhandler} />
          </div>
        </div>
      );
    }
    return <div id="productGallery"></div>
  }

}

export default Gallery;