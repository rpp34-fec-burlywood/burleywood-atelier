/* eslint-disable react/prop-types */
import React from 'react';
import $ from 'jquery';

class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      height: 500
    }

    this.expandHandler = this.expandHandler.bind(this);
    this.renderArrows = this.renderArrows.bind(this);
    this.changeImageStyle = this.changeImageStyle.bind(this);
    this.arrowXStyle = this.arrowXStyle.bind(this);
    this.arrowXHelper = this.arrowXHelper.bind(this);
  }

  // mainImage will need to be its own component for expanded view

  expandHandler() {
    var height = $('#overview').height();
    this.setState({
      expanded: !this.state.expanded,
      height
    })

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
    console.log(e.target.attributes.move.value);
    console.log('move:', move);
    console.log('max', this.props.selectedStyle.photos.length);
    this.props.arrowXClickHandler(move, this.props.selectedStyle.photos.length)
  }

  renderArrows(expandedState) {
    if (expandedState && this.props.selectedStyle.photos.length > 1) {
      return (
        <>
          <button id="mainLeft" className="arrowX"
            style={this.arrowXStyle()} move="-1"
            onClick={this.arrowXHelper}>&#10092;</button>
          <button id="mainRight" className="arrowX"
            style={this.arrowXStyle()} move="1"
            onClick={this.arrowXHelper}>&#10093;</button>
        </>
      )
    }
  }

  render() {
    return (
      <div className={`mainImageContainer${this.state.expanded ? ' expanded' : ''}`}
        style={this.changeImageStyle(this.state.expanded)}>
        <div id='expandBTN' onClick={this.expandHandler}>{'[=]'}</div>
        {this.renderArrows(this.state.expanded)}
        <div className={`mainImageScroll ${this.state.expanded ? ' expanded' : ''}`}>
          <img className={`mainImage${this.state.expanded ? ' expanded' : ''}`}
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