/* eslint-disable react/prop-types */
import React from 'react';
import './ThumbnailModal.css';


class ThumbnailModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModalEventHandler = this.closeModalEventHandler.bind(this);
  }

  closeModalEventHandler(event) {
    let modalWindow = document.getElementById("thumbnailModalImage");
    if (event.target !== modalWindow && !event.target.matches('.qa-thumbnail-icon')) {
      this.props.closeThumbnailModal();
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModalEventHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeModalEventHandler)
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