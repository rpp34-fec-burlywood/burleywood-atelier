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
    this.renderArrows = this.renderArrows.bind(this)
  }

  // mainImage will need to be its own component for expanded view

  expandHandler() {
    var height = $('#overview').height();
    this.setState({
      expanded: !this.state.expanded,
      height
    })

  }

  changeStyle(expandedState) {
    if (!expandedState) {
      return {};
    }
    return {
      width: '1000px',
      height: `${this.state.height}px`,
    }
  }

  renderArrows(expandedState) {
    if (expandedState && this.props.selectedStyle.photos.length > 1) {
      return (
        <>
          <button id="mainLeft" className='arrowX'> Left </button>
          <button id="mainRight" className='arrowX'> Right </button>
        </>
      )
    }
  }

  render() {
    return (
      <div className={`mainImageContainer${this.state.expanded ? ' expanded' : ''}`}
        style={this.changeStyle(this.state.expanded)}>
        <div id ='expandBTN'onClick={this.expandHandler}>{'[=]'}</div>
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