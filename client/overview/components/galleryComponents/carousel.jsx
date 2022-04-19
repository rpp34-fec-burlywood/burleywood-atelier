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
      if (index !== mainImageIndex){
        counter++;
        return (
          <div className="galleryThumbsBox" key={`galThumb${counter}`}>
              <img className="galleryThumb" src={photo.thumbnail_url}/>
            </div>
        );
      }
    });

    return carousel;
  }

  render () {
    return(
      <div className="carousel">
        {this.renderCarousel(this.props.mainImageIndex)}
      </div>
    );
  }
}

export default Carousel;