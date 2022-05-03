/* eslint-disable react/prop-types */
import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props)
    this.postReview = this.postReview.bind(this);
  }

  postReview() {
    this.props.closeModal;
    // this.props.postReview()
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }

    return(
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Review</h4>
          </div>
          <div className='modal-body'>
            <form>
              <label>Username</label><br></br>
              <input type="text" name="user"/><br></br>
              <label>Email</label><br></br>
              <input type="text" name="user"/><br></br>
              <label>Rating</label><br></br>
              <input type="text" name="user"/><br></br>
              <label>Summary</label><br></br>
              <input type="text" name="summary"/><br></br>
              <label>Body</label><br></br>
              <input type="text" name="body"/><br></br>
              <label>Recommend</label><br></br>
              <input type="text" name="summary"/><br></br>
              <label>Body</label><br></br>
              <input type="text" name="body"/><br></br>
              {/* <label>Review</label><br></br>
              <input type="text" name="body"/><br></br> */}
            </form>
          </div>
          <div>
            <button className='button' onClick={this.props.closeModal}> Close </button>
            <button className='button' onClick={this.props.closeModal}> Post Review </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewReview