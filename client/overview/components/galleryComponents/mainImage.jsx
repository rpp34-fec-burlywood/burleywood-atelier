/* eslint-disable react/prop-types */
import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      height: 550
    }

    this.expandHandler = this.expandHandler.bind(this);
    this.renderArrowLeft = this.renderArrowLeft.bind(this);
    this.renderArrowRight = this.renderArrowRight.bind(this)
    this.arrowXStyle = this.arrowXStyle.bind(this);
    this.arrowXHelper = this.arrowXHelper.bind(this);
    this.arrowNav = this.arrowNav.bind(this);
  }

  // mainImage will need to be its own component for expanded view

  expandHandler() {
    if (!this.state.expanded) {
      // var height = document.getElementById('overview').offsetHeight;
      var height = 0.8 * window.innerHeight;
      var width = 0.8 * window.innerWidth;
      this.setState({
        expanded: !this.state.expanded,
        height,
        width,
      })
    } else {
      this.setState({
        expanded: !this.state.expanded,
        height: 550,
        width: 600
      })
    }
  }

  arrowXStyle(left = true, mainImageIndex, numImages) {
    if (left) {
      if (!(mainImageIndex > 0)) {
        return { visibility: 'hidden' }
      }
    } else {
      if (!(mainImageIndex < numImages - 1)) {
        return { visibility: 'hidden' }
      }
    }
  }

  arrowXHelper(e) {
    var move = Number(e.target.attributes.move.value);
    this.props.arrowXClickHandler(move, this.props.selectedStyle.photos.length)
  }


  /**Because not component, must take in props to cause rerender! */
  renderArrowLeft(expandedState, mainImageIndex) {
    var numImages = this.props.selectedStyle.photos.length;
    if (numImages > 1) {
      return (
        <button id="mainLeft" className={`arrowX ${expandedState ? 'expandedL' : 'aL'}`}
          style={this.arrowXStyle(true, mainImageIndex, numImages)}
          move="-1"
          onClick={this.arrowXHelper}>&#10092;</button>
      );
    }
  }

  renderArrowRight(expandedState, mainImageIndex) {
    var numImages = this.props.selectedStyle.photos.length;
    if (numImages > 1) {
      return (
        <button id="mainRight" className={`arrowX ${expandedState ? 'expandedR' : 'aR'}`}
          style={this.arrowXStyle(false, mainImageIndex, numImages)}
          move="1"
          onClick={this.arrowXHelper}>&#10093;</button>
      );
    }
  }

  arrowNav (e) {
    console.log(e.key)
    if (e.key === 'ArrowLeft') {
      this.props.arrowXClickHandler(-1, this.props.selectedStyle.photos.length)
    }
    if (e.key === 'ArrowRight') {
      this.props.arrowXClickHandler(1, this.props.selectedStyle.photos.length)
    }
    if (e.key === 'Escape') {
      this.expandHandler();
    }
  }

  render() {
    // console.log('RENDERED MainImage');
    if (this.state.expanded) {
      document.addEventListener('keydown', this.arrowNav);
    } else {
      document.removeEventListener('keydown', this.arrowNav);
    }

    return (
      <div className={`mainImageContainer ${this.state.expanded ? ' expanded' : ''}`}>
        {/* <div id='expandBTN' onClick={this.expandHandler}>{'[=]'}</div> */}
        {this.renderArrowLeft(this.state.expanded, this.props.mainImageIndex)}
        <div className={`mainImageScroll${this.state.expanded ? ' expanded' : ''}`}>
          <link rel="preload" as="image" href={
            this.props.selectedStyle.photos[this.props.mainImageIndex] ?
              this.props.selectedStyle.photos[this.props.mainImageIndex].url :
              this.props.selectedStyle.photos[0].url
          } />
          <img className={`mainImage${this.state.expanded ? ' expanded' : ''}`}
            onClick={this.expandHandler}
            src={
              this.props.selectedStyle.photos[this.props.mainImageIndex] ?
                this.props.selectedStyle.photos[this.props.mainImageIndex].url :
                this.props.selectedStyle.photos[0].url
            } />
        </div>
        {this.renderArrowRight(this.state.expanded, this.props.mainImageIndex)}
      </div>
    );
  }
}

export default MainImage;