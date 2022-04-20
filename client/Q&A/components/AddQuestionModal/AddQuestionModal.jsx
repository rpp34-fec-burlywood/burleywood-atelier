/* eslint-disable react/prop-types */
import React from 'react';
import './AddQuestionModal.css';
import API from '../../../utils/APIRequests.js'
import api from '../../../utils/APIRequests.js';
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
      .then(xd => console.log(xd))
    // add case where it fails and doesn't close
    this.props.closeModal();
  }

  render() {
    return(
      <div id='questionModal'>
        <div id='questionModalWindow'>
          <h1>Post your question</h1>
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
          <label>Your Question: </label>
          <textarea 
            rows="5" cols="33" 
            placeholder="Please enter a question." 
            onChange={(e) => this.setQuestionBody(e.target.value)}>
          </textarea>
          <label>
            Your question might be answered by sellers, manufacturers, or customers who bought this product.
          </label>
          <div id='questionModalFooter'>
            <button onClick={this.props.closeModal}>Cancel</button>
            <button onClick={this.postQuestion}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestionModal