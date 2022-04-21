/* eslint-disable react/prop-types */
import React from 'react';

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
          <img className="galleryThumb active" src={photo.thumbnail_url} key={index} />
        );
      }
      return (
        <img className="galleryThumb" src={photo.thumbnail_url} key={index}/>
      );
    });

    return carousel;
  }

  render () {
    return(
      <div className="carousel">
        <div className="carSlider">
          {/* up arrow*/}
          {this.renderCarousel(this.props.mainImageIndex)}
          {/* down arrow*/}
        </div>
      </div>
    );
  }
}

export default Carousel;