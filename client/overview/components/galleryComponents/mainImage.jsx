/* eslint-disable react/prop-types */
import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      superZoom: false,
      px_fudge: 4,
      percent_fudgeX: 1.02,
      percent_fudgeY: 1.00,
    }

    this.expandHandler = this.expandHandler.bind(this);
    this.renderArrowLeft = this.renderArrowLeft.bind(this);
    this.renderArrowRight = this.renderArrowRight.bind(this)
    this.arrowXStyle = this.arrowXStyle.bind(this);
    this.arrowXHelper = this.arrowXHelper.bind(this);
    this.arrowNav = this.arrowNav.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.imageHref = this.imageHref.bind(this);
    this.moveSuperZoom = this.moveSuperZoom.bind(this);
  }

  // mainImage will need to be its own component for expanded view

  expandHandler() {
    this.setState({
      expanded: !this.state.expanded,
      superZoom: false,
    });
  }

  toggleZoom(e) {
    // add mouse location to calculate initial position like the moveSuperZoom

    this.setState({
      superZoom: !this.state.superZoom,
    }, () => {
      //See if this can be refactored for simplification!
      if (this.state.superZoom) {
        this.moveSuperZoom(e);
      }
    });
  }

  moveSuperZoom(e) {
    // ZoomBox and MouseBox functions will be done on componentDidMount and set to state in the non executing state??
    // Will need to test which I can get away with?

    var zoomImg = document.getElementById('superZoom');
    var mouseBox = document.getElementById('mainImageScroll');
    var zoomBox = zoomImg.getBoundingClientRect();

    // Using Scoll as the bounding Client Rect
    var mouseBox = mouseBox.getBoundingClientRect();
    // Need Math here to calculate the correct scaling movement!! :)
    let x = (mouseBox.left - e.pageX - this.state.px_fudge) * ((zoomBox.width - mouseBox.width - this.state.px_fudge)
      / (mouseBox.width * this.state.percent_fudgeX));
    let y = (mouseBox.top - e.pageY - this.state.px_fudge) * ((zoomBox.height - mouseBox.height - this.state.px_fudge)
        / (mouseBox.height * this.state.percent_fudgeY));

    // console.log(`${mouseBox.top} ${e.pageY}`)
    zoomImg.style.top = `${y}px`;
    zoomImg.style.left = `${x}px`;
  }

  arrowXStyle(left = true, mainImageIndex, numImages) {
    if (left) {
      if (!(mainImageIndex > 0)) {
        return { opacity: 0 }
      }
    } else {
      if (!(mainImageIndex < numImages - 1)) {
        return { opacity: 0 }
      }
    }
  }

  arrowXHelper(e) {
    var move = Number(e.target.attributes.move.value);
    this.props.arrowXClickHandler(move, this.props.selectedStyle.photos.length, this.props.trackMainImage);
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

  arrowNav(e) {
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

  imageHref(selectedStyle) {
    return (
      selectedStyle.photos[this.props.mainImageIndex] ?
        selectedStyle.photos[this.props.mainImageIndex].url :
        selectedStyle.photos[0].url
    );
  }

  render() {
    // console.log('RENDERED MainImage');
    if (this.state.expanded) {
      document.addEventListener('keydown', this.arrowNav);
    } else {
      document.removeEventListener('keydown', this.arrowNav);
    }


    if (this.state.superZoom) {
      var imgContainer = document.getElementById('mainImageScroll');
      imgContainer.addEventListener("mousemove", this.moveSuperZoom)
    } else {
      var imgContainer = document.getElementById('mainImageScroll');
      imgContainer?.removeEventListener("mousemove", this.moveSuperZoom)
    }

    return (
      <div className={`mainImageContainer ${this.state.expanded ? ' expanded' : ''}`}>
        {this.state.expanded ?
          <div id='expandBTN' onClick={this.expandHandler}>{'X'}</div>
          : null}
        {this.renderArrowLeft(this.state.expanded, this.props.mainImageIndex)}
        <div id="mainImageScroll" className={`mainImageScroll${this.state.expanded ? ' expanded' : ''}`}>
          <link rel="preload" as="image" href={this.imageHref(this.props.selectedStyle)} />
          <img className={`mainImage${this.state.expanded ? ' expanded' : ''}`}
            onClick={this.state.expanded ? this.toggleZoom : this.expandHandler}
            src={this.imageHref(this.props.selectedStyle)} />
          {this.state.superZoom ?
            <img id="superZoom"
              onClick={this.toggleZoom}
              src={this.imageHref(this.props.selectedStyle)} />
            : null
          }
        </div>
        {this.renderArrowRight(this.state.expanded, this.props.mainImageIndex)}
      </div>
    );
  }
}

export default MainImage;