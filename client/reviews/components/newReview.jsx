/* eslint-disable react/prop-types */
import React from 'react';
import FStars from './fullstars.jsx';
import './reviews.css';

class NewReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 64626,
      rating: 1,
      summary: 'hi',
      body: 'gu',
      recommend: true,
      name: '',
      email: 'asdf',
      photos: [],
      characteristics: {},
      missingData: false
    }

    this.postReview = this.postReview.bind(this);
    this.setName = this.setName.bind(this);
    // this.setRating = this.setRating.bind(this);
    // this.setSummary = this.setSummary.bind(this);
    // this.setRec = this.setRec.bind(this);
    // this.setEmail = this.setEmail.bind(this);
    // this.setPhotos = this.setPhotos.bind(this);
    // this.setChar = this.setChar.bind(this);
  }

  setName(e) {
    this.setState({
      name: e.target.value
    });
  }

  // setRating(rating) {
  //   this.setState({
  //     name: name
  //   })
  // }

  // setSummary(summary) {
  //   this.setState({
  //     name: name
  //   })
  // }

  // setRec(rec) {
  //   this.setState({
  //     name: name
  //   })
  // }

  // setEmail(email) {
  //   this.setState({
  //     name: name
  //   })
  // }

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
    if (this.state.name === '') {
      this.setState({
        missingData: true
      })
    }

    if (!this.state.missingData) {
      this.props.closeModal();
      //this.props.postReview(this.state.id, this.state.rating, this.state.summary, this.state.body, this.state.recommend, this.state.name, this.state.email, this.state.photos, this.state.characteristics);
    }
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }

    return(
      <div className='rmodal'>
        <div className='rmodal-content'>
          <div className='rmodal-header'>
            <h4 className='rmodal-title'>Write Your Review</h4>
            <h5 className='rmodal-title'>About the Product</h5>
          </div>
          <div className='rmodal-body'>
            <form>
              <label>Username</label><br></br>
              <input type="text" name="user" placeholder="Example: jackson11!" onChange={this.setName}/><br></br>
              <div> For privacy reasons, do not use your full name or email address </div>
              <label>Email</label><br></br>
              <input type="text" name="email" placeholder="Example: jackson11@email.com" size={60} maxLength={60}/><br></br>
              <label>Rating</label><br></br>
              <div className='ratings'>
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
              <input type="text" name="summary" size={60}/><br></br>
              <label>Body</label><br></br>
              <textarea name="body" rows="4" cols="50"/><br></br>
              <label>Recommend</label><br></br>
              <div>
                <input type="radio" id='yes' name="stars"/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" id='no' name="stars"/>
                <label htmlFor="no">No</label>
              </div>
              <label>Photos</label><br></br>
              <input type="file" id="files" name="files" multiple/><br></br>
              <label>Characteristics</label><br></br>
              {Object.keys(this.props.meta.characteristics).map((char) => {
                return (
                  <div key={char} id={char} >
                    <div className="chars">{char}</div>
                    <select name={this.props.meta.characteristics[char].id} id={`${char}-scroll`}>
                      <option value="empty"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                );
              })}
            </form>
          </div>
          <div>
            <button className='button' onClick={this.props.closeModal}> Close </button>
            <button className='button' onClick={this.postReview}> Post Review </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewReview