/* eslint-disable react/prop-types */
import React from 'react';
import ThumbnailModal from './ThumbnailModal.jsx';
import './Thumbnail.css';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      thumbnailModalOpen: false
    }

    this.openThumbnailModal = this.openThumbnailModal.bind(this);
    this.closeThumbnailModal = this.closeThumbnailModal.bind(this);
  }

  openThumbnailModal() {
    this.setState({
      thumbnailModalOpen: true
    })
  }

  closeThumbnailModal() {
    this.setState({
      thumbnailModalOpen: false
    })
  }

  render() {
    return(
      <>
        {this.state.thumbnailModalOpen ? 
          <ThumbnailModal closeThumbnailModal={this.closeThumbnailModal} thumbnailLink={this.props.thumbnailLink}/> :
          null  
        }
        <img className='qa-thumbnail-icon' src={this.props.thumbnailLink} onClick={this.openThumbnailModal}/>
      </>

    );
  }
}

export default Thumbnail;