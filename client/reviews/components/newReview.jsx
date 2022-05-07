/* eslint-disable react/prop-types */
import React from 'react';
import FStars from './fullstars.jsx';

class NewReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.currProd,
      rating: 0,
      summary: '',
      body: '',
      recommend: true,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }

    this.postReview = this.postReview.bind(this);
    this.setName = this.setName.bind(this);
    this.setRating = this.setRating.bind(this);
    this.setSummary = this.setSummary.bind(this);
    this.setRec = this.setRec.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhotos = this.setPhotos.bind(this);
    this.setChar = this.setChar.bind(this);
  }

  setName(name) {
    this.setState({
      name: name
    })
  }

  setRating(rating) {
    this.setState({
      name: name
    })
  }

  setSummary(summary) {
    this.setState({
      name: name
    })
  }

  setRec(rec) {
    this.setState({
      name: name
    })
  }

  setEmail(email) {
    this.setState({
      name: name
    })
  }

  // setPhotos(photos) {
  //   this.setState({
  //     name: name
  //   })
  // }

  // setPhotos(char) {
  //   this.setState({
  //     name: name
  //   })
  // }

  postReview() {
    this.props.closeModal;
    //this.props.postReview(this.state.id, this.state.rating, this.state.summary, this.state.body, this.state.recommend, this.state.name, this.state.email, this.state.photos, this. state.characteristics);
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
              <input type="text" name="user" onChange={(e) => this.setName(e.target.value)}/><br></br>
              <label>Email</label><br></br>
              <input type="text" name="email" onChange={(e) => this.setEmail(e.target.value)}/><br></br>
              <label>Rating</label><br></br>
              <div className='rating'>
                <input type="radio" id='one' name="stars"/>
                <label htmlFor="one"><FStars stars={1}/></label>
                <input type="radio" id='two' name="stars"/>
                <label htmlFor="two"><FStars stars={2}/></label>
                <input type="radio" id='three' name="stars"/>
                <label htmlFor="three"><FStars stars={3}/></label>
                <input type="radio" id='four' name="stars"/>
                <label htmlFor="four"><FStars stars={4}/></label>
                <input type="radio" id='five' name="stars"/>
                <label htmlFor="five"><FStars stars={5}/></label><br></br>
              </div>
              <label>Summary</label><br></br>
              <input type="text" name="summary"/><br></br>
              <label>Body</label><br></br>
              <input type="text" name="body"/><br></br>
              <label>Recommend</label><br></br>
              <div>
                <input type="radio" id='yes' name="stars"/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" id='no' name="stars"/>
                <label htmlFor="no">No</label>
              </div>
              <label>Photos</label><br></br>
              <input type="text" name="summary"/><br></br>
              <label>Characteristics</label><br></br>
              <input type="text" name="body"/><br></br>
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