/* eslint-disable react/prop-types */
import React from 'react';
import $ from 'jquery';

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
    this.changeImageStyle = this.changeImageStyle.bind(this);
    this.arrowXStyle = this.arrowXStyle.bind(this);
    this.arrowXHelper = this.arrowXHelper.bind(this);
  }

  // mainImage will need to be its own component for expanded view

  expandHandler() {
    if (!this.state.expanded) {
      var height = $('#overview').height();
      this.setState({
        expanded: !this.state.expanded,
        height
      })
    } else {
      this.setState({
        expanded: !this.state.expanded,
        height: 550
      })
    }
  }

  changeImageStyle(expandedState) {
    if (!expandedState) {
      return {};
    }
    return {
      width: '1000px',
      height: `${this.state.height}px`,
    }
  }

  arrowXStyle() {
    return {
      height: `${this.state.height}px`,
    }
  }

  arrowXHelper(e) {
    var move = Number(e.target.attributes.move.value);
    this.props.arrowXClickHandler(move, this.props.selectedStyle.photos.length)
  }


  /**Because not component, must take in props to cause rerender! */
  renderArrowLeft(expandedState, mainImageIndex) {
    var numImages = this.props.selectedStyle.photos.length;
    if (numImages > 1 && mainImageIndex > 0) {
      return (
        <button id="mainLeft" className={`arrowX ${expandedState ? 'expandedL' : 'aL'}`}
          style={this.arrowXStyle()} move="-1"
          onClick={this.arrowXHelper}>&#10092;</button>
      );
    }
  }

  renderArrowRight(expandedState, mainImageIndex) {
    var numImages = this.props.selectedStyle.photos.length;
    if (numImages > 1 && mainImageIndex < numImages - 1) {
      return (
        <button id="mainRight" className={`arrowX ${expandedState ? 'expandedR' : 'aR'}`}
          style={this.arrowXStyle()} move="1"
          onClick={this.arrowXHelper}>&#10093;</button>
      );
    }
  }

  render() {
    // console.log('RENDERED MainImage');
    return (
      <div className={`mainImageContainer${this.state.expanded ? ' expanded' : ''}`}
        style={this.changeImageStyle(this.state.expanded)}>
        {/* <div id='expandBTN' onClick={this.expandHandler}>{'[=]'}</div> */}
        {this.renderArrowLeft(this.state.expanded, this.props.mainImageIndex)}
        {this.renderArrowRight(this.state.expanded, this.props.mainImageIndex)}
        <div className={`mainImageScroll ${this.state.expanded ? ' expanded' : ''}`}>
          <img className={`mainImage${this.state.expanded ? ' expanded' : ''}`}
            onClick={this.expandHandler}
            src={
              this.props.selectedStyle.photos[this.props.mainImageIndex] ?
                this.props.selectedStyle.photos[this.props.mainImageIndex].url :
                this.props.selectedStyle.photos[0].url
            } />
        </div>
      </div>
    );
  }
}

export default MainImage;