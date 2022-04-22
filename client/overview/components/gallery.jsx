/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './galleryComponents/carousel.jsx';
import './galleryComponents/gallery.css'


class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImageIndex: 0
    }

    this.carouselClickhandler = this.carouselClickhandler.bind(this);
  }

  carouselClickhandler (e){
    e.preventDefault();
    // console.log(e.target.attributes.index?.value)
    var index = Number(e.target.attributes.index?.value);
    if (index && index !== this.state.mainImageIndex) {
      this.setState({
        mainImageIndex: index
      })
    }
  }

  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="productGallery">
          <div className="productImageBlock">
            <img className="mainImage"
              src={this.props.selectedStyle.photos[this.state.mainImageIndex].url}>
            </img>
            <Carousel
              mainImageIndex={this.state.mainImageIndex}
              selectedPhotos={this.props.selectedStyle.photos}
              carouselClickhandler={this.carouselClickhandler} />
          </div>
        </div>
      );
    }
    return <div id="productGallery"></div>
  }

}

export default Gallery;