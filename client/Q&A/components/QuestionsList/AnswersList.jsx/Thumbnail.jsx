/* eslint-disable react/prop-types */
import React from 'react';
import './Thumbnail.css';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <img className='qa-thumbnail-icon' src={this.props.thumbnailLink}/>
    );
  }
}

export default Thumbnail;