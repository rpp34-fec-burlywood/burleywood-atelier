/* eslint-disable react/prop-types */
import React from 'react';
import './AddAnswerModal.css';
import API from '../../../utils/APIRequests.js';
import axios from 'axios';
import Thumbnail from '../QuestionsList/AnswersList.jsx/Thumbnail/Thumbnail.jsx';
class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      answerBody: '',
      photos: []
    }

    this.closeModalEventHandler = this.closeModalEventHandler.bind(this);
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setAnswerBody = this.setAnswerBody.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }

  closeModalEventHandler(event) {
    let modalWindow = document.getElementById("answerModalWindow");
    if (!modalWindow.contains(event.target) && !event.target.matches('div.add-answer')) {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModalEventHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeModalEventHandler)
  }

  setName(name) {
    this.setState({
      name
    })
  }

  setEmail(email) {
    this.setState({
      email
    })
  }

  setAnswerBody(answerBody) {
    this.setState({
      answerBody
    })
  }

  handlePhotoChange(e) {
    let newPhotoState = [...this.state.photos, e.target.files[0]]
    this.setState({
      photos: newPhotoState
    })
  }


  postAnswer() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.answerBody,
    }

    if (data['name'] === '' || data['email'] === '' || data['body'] === '') {
      let inputArray = []
      for (const key in data) {
        if (data[key] === '') {
          let inputName = '#' + key + '-' + 'input'
          inputArray.push(document.querySelector(inputName))
        }
      }
      for (const ele of inputArray) {
        ele.reportValidity()
      }
    } else {
      const formData = new FormData();
      for (const photo of this.state.photos) {
        formData.append('photos', photo)
      }
  
      axios.post('/uploadPhotos', formData)
        .then((urls) => {
          API.postAnswer(this.props.question_id, data)
            .then(res => console.log(res))
          this.props.closeModal();
        })
    }

  }

  render() {
    return(
      <div id='answerModal'>
        <div id='answerModalWindow'>
          <h1 className='modal-top-title'>Post your Answer</h1>
          <label className='modal-title'>What is your nickname*</label>
          <input
            required
            id='name-input'
            className='modal-input error'
            onChange={(e) => this.setName(e.target.value)} 
            placeholder='Example: jack543!'
          />
          <label className='modal-title'>Your email*</label> 
          <input 
            required
            id='email-input'
            className='modal-input'
            onChange={(e) => this.setEmail(e.target.value)}
            placeholder='Example: jack@email.com'
          />
          <label className='modal-title'>Your Answer*</label>
          <textarea
            required
            id='body-input'
            className='modal-input' 
            rows="5" cols="33" 
            placeholder="Why did you like the product or not?" 
            onChange={(e) => this.setAnswerBody(e.target.value)}>
          </textarea >
          <label className='modal-title'>Upload your photos</label>
          {this.state.photos.length >= 5 ? 
            null : 
            <div>
              <input 
                type="file"
                onChange= {(e) => this.handlePhotoChange(e)}
                multiple
              />
            </div>
          }
          <div className='qa-thumbnail-icon-list'>
            {this.state.photos.map((photo, index) => 
                <Thumbnail thumbnailLink={URL.createObjectURL(photo)} key={index} noModal={true}/>
              )}
          </div>
          <label className='modal-footnote'>
            For authentication reasons, you will not be emailed
          </label>
          <div className='answerModalFooter'>
            <div
              className='modal-footer-buttons'
              onClick={this.props.closeModal}
            >
              Cancel
            </div>
            <div
              className='modal-footer-buttons'
              onClick={this.postAnswer}
            >
              Submit answer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAnswerModal