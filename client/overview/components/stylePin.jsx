/* eslint-disable react/prop-types */
import React from 'react';

class StylePin extends React.Component {
  constructor(props) {
    super(props);
  }

  // stypledId={style.style_id}
  // photo={style.photos[0].thumbnail_url}
  // key={style.style_id}


  render() {
    return(
      <div className="stylePin" styleId={this.props.styledId}>
        <img className="pinImag" src={this.props.photo}></img>
      </div>
    );
  }

}

export default StylePin;