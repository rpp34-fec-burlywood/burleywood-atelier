/* eslint-disable react/prop-types */
import React from 'react';
import './ThumbnailModal.css';


class ThumbnailModal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }



  render() {
    return(
      <div id='thumbnailModal'>
        <div id="close" onClick={this.props.closeThumbnailModal}>
          x
        </div>
        <img id='thumbnailModalImage' src={this.props.thumbnailLink}/>
      </div>
      
    );
  }
}

export default ThumbnailModal