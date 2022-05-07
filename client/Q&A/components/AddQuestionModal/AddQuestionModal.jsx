/* eslint-disable react/prop-types */
import React from 'react';
import './AddQuestionModal.css';
import API from '../../../utils/APIRequests.js'
class AddQuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      questionBody: ''
    }

    this.closeModalEventHandler = this.closeModalEventHandler.bind(this);
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setQuestionBody = this.setQuestionBody.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
  }

  closeModalEventHandler(event) {
    let modalWindow = document.getElementById("questionModalWindow");
    let addQuestionButton = document.getElementById("add-question-button");
    if (!modalWindow.contains(event.target) && event.target !== addQuestionButton) {
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

  setQuestionBody(questionBody) {
    this.setState({
      questionBody
    })
  }

  postQuestion() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.questionBody,
      product_id: this.props.currProd.id
    }
    
    API.postQuestion(this.props.currProd.id, data)
      .then(res => console.log(res))
    // add case where it fails and doesn't close
    this.props.closeModal();
  }

  render() {
    return(
      <div id='questionModal'>
        <div id='questionModalWindow'>
          <h1 className='modal-top-title' >Post your question</h1>
          <label className='modal-title'>What is your nickname*</label>
          <input
            className='modal-input'
            onChange={(e) => this.setName(e.target.value)} 
            placeholder='Ex: Bob Junior'
          />
          <label className='modal-title'>Your email*</label> 
          <input
            className='modal-input' 
            onChange={(e) => this.setEmail(e.target.value)}
            placeholder='Ex: bobjunior@email.com'
          />
          <label className='modal-title'>Your Question*</label>
          <textarea 
            className='modal-input'
            rows="5" cols="33" 
            placeholder="Please enter a question." 
            onChange={(e) => this.setQuestionBody(e.target.value)}>
          </textarea>
          <label className='modal-footnote'>
            For authentication reasons, you will not be emailed
          </label>
          <div id='questionModalFooter'>
            <div
              className='modal-footer-buttons'
              onClick={this.props.closeModal}
            >
              Cancel
            </div>
            <div
              className='modal-footer-buttons'
              onClick={this.postQuestion}
            >
              Submit question
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestionModal