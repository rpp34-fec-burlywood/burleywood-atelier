/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './galleryComponents/carousel.jsx';


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
            <img className="mainImage"
              src={
                this.props.selectedStyle.photos[this.props.mainImageIndex] ?
                  this.props.selectedStyle.photos[this.props.mainImageIndex].url :
                  this.props.carouselClickhandler({ target: { attributes: { index: 0 } } })
                }>
          </img>
          <Carousel
            mainImageIndex={this.props.mainImageIndex}
            selectedPhotos={this.props.selectedStyle.photos}
            carouselClickhandler={this.props.carouselClickhandler} />
        </div>
        </div >
      );
    }
    return <div id="productGallery"></div>
  }

}

export default Gallery;