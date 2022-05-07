/* eslint-disable react/prop-types */
import React from 'react';
import { BsDot } from 'react-icons/bs';
import { CgLoadbar } from 'react-icons/cg';

class ImgIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.genIndicator = this.genIndicator.bind(this);
  }

  genIndicator(mainImageIndex, length = 1) {
    var indicator = [];
    var size = '2em';

    for (let i = 0; i < length; i++) {
      if (i === mainImageIndex) {
        indicator.push(
          <span key={i}><CgLoadbar size={size} /></span>
        );
      } else {
        indicator.push(
          <span key={i}><BsDot size={size} /></span>
        );
      }
    }

    return indicator;
  }

  render() {
    return (
      <div className={`imgIndicator ${this.props.expanded ? 'active' : ''}`}>
        {this.genIndicator(this.props.mainImageIndex, this.props.imgLength)}
      </div>
    );
  }
}

export default ImgIndicator;