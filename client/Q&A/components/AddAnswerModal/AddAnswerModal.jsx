/* eslint-disable react/prop-types */
import React from 'react';
import './AddAnswerModal.css';
import API from '../../../utils/APIRequests.js';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      answerBody: ''
    }

    this.closeModalEventHandler = this.closeModalEventHandler.bind(this);
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setAnswerBody = this.setAnswerBody.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
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

  postAnswer() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.answerBody,
    }
    
    API.postAnswer(this.props.question_id, data)
      .then(res => console.log(res))
    // add case where it fails and doesn't close
    this.props.closeModal();
  }

  render() {
    return(
      <div id='answerModal'>
        <div id='answerModalWindow'>
          <h1>Post your Answer</h1>
          <label>Your name: </label>
          <input
            onChange={(e) => this.setName(e.target.value)} 
            placeholder='Ex: Bob Junior'
          />
          <label>Your email: </label> 
          <input 
            onChange={(e) => this.setEmail(e.target.value)}
            placeholder='Ex: bobjunior@email.com'
          />
          <label>Your Answer: </label>
          <textarea 
            rows="5" cols="33" 
            placeholder="Please enter your Answer." 
            onChange={(e) => this.setAnswerBody(e.target.value)}>
          </textarea>
          <div id='answerModalFooter'>
            <button onClick={this.props.closeModal}>Cancel</button>
            <button onClick={this.postAnswer}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAnswerModal