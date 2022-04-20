/* eslint-disable react/prop-types */
import React from 'react';
import './AddQuestionModal.css';

class AddQuestionModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModalEventHandler = this.closeModalEventHandler.bind(this)
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

  setName() {
    
  }

  setEmail() {

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