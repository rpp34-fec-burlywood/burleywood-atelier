/* eslint-disable react/prop-types */
import React from 'react';

class StylePin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="stylePin" styleid={this.props.styledId}>
        <img className="pinImag" src={this.props.photo}></img>
      </div>
    );
  }

}

export default StylePin;