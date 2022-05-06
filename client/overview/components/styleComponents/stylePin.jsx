/* eslint-disable react/prop-types */
import React from 'react';

class StylePin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stylePinHolder" >
        <img className={`stylePin ${this.props.selectedStyleId === this.props.styledId? 'active' : null}`}
          src={this.props.photo}
          styleid={this.props.styledId}>
          </img>
        {this.props.selectedStyleId === this.props.styledId? <div className="styleCheck">&#10004;</div> : null}
      </div>
    );
  }

}

export default StylePin;