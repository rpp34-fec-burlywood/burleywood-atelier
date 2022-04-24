/* eslint-disable react/prop-types */
import React from 'react';

class StylePin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <img className="stylePin" src={this.props.photo} styleid={this.props.styledId}></img>
    );
  }

}

export default StylePin;