/* eslint-disable react/prop-types */
import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImageIndex: 0
    }
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  renderCarousel(mainImageIndex) {
    var carousel = [];
    var counter = 0;
    for (let i = 0; i < this.props.selectedStyle.photos.length; i++) {
      var photo = this.props.selectedStyle.photos[i];
      if (i !== mainImageIndex) {
        carousel.push(
          <div className="galleryThumbsBox"key={`galThumb${counter}`}>
            <img className="galleryThumb" src={photo.thumbnail_url}></img>
          </div>
        );
      }
      counter++;
    }
    return (
      <div className="carousel">
        {carousel}
      </div>
    );
  }
  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="productGallery">
          <div className="productImageBlock">
            <img className="mainImage"
              src={this.props.selectedStyle.photos[this.state.mainImageIndex].url}>
            </img>
            {this.renderCarousel(this.state.mainImageIndex)}
          </div>
        </div>
      );
    }
    return <div id="productGallery"></div>
  }

}

export default Gallery;