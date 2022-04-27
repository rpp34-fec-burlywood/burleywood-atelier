/* eslint-disable react/prop-types */
import React from 'react';
import AnswersList from './AnswersList.jsx/AnswersList.jsx';
import AddAnswerModal from '../AddAnswerModal/AddAnswerModal.jsx';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerListLength: 2,
      answerListTotalLength: Object.keys(props.question?.answers).length,
      expanded: false,
      answerModalOpen: false
    }

    this.returnAnswerObject = this.returnAnswerObject.bind(this);
    this.expandAnswerList = this.expandAnswerList.bind(this);
    this.collapseAnswers = this.collapseAnswers.bind(this);
    this.closeAnswerModal = this.closeAnswerModal.bind(this);
    this.openAnswerModal = this.openAnswerModal.bind(this);
  }

  componentDidMount() {
    if (this.state.answerListTotalLength < 2) {
      this.setState({
        answerListLength: this.state.answerListTotalLength
      })
    }
  }

  returnAnswerObject() {
    let answerObject = {};
    let answers = this.props.question?.answers;
    let index = 0;

    for (let answer in answers) {
      if (index < this.state.answerListLength) {
        answerObject[answer] = answers[answer]; 
      }
      index++;
    }

    return answerObject
  }

  expandAnswerList() {
    this.setState({
      answerListLength: this.state.answerListTotalLength,
      expanded: true
    })
  }

  collapseAnswers() {
    let resetAnswerListLength = this.state.answerListTotalLength < 2 ? 
      this.state.answerListTotalLength : 
      2; 

    this.setState({
      answerListLength: resetAnswerListLength,
      expanded: false
    })
  }

  closeAnswerModal() {
    this.setState({
      answerModalOpen: false
    })
  }

  openAnswerModal() {
    console.log('AYOOOOO')
    this.setState({
      answerModalOpen: true
    })
  }

  render() {
    console.log('QUESTION STATE: ', this.state)
    return(
      <>
        {this.state.answerModalOpen ?  
          <AddAnswerModal 
            closeModal={this.closeAnswerModal} 
            question_id={this.props.question?.question_id}
          /> : 
          null
        }
        <div className='question'>
          <div className='question-start'>
            Q:
          </div>
          <div className='question-body'>
            {this.props.question?.question_body}
          </div>
          <div>Helpful? Yes ()</div>
          <div>
            |
          </div>
          <div className='add-answer' onClick={this.openAnswerModal}>
            Add Answer
          </div>
        </div>
        <div className='answers'>
          <div className='answer-start'>
            A:
          </div>
          <div className='answers-list'>
            <AnswersList
              answers={this.returnAnswerObject()}
            />
            {this.state.answerListLength !== this.state.answerListTotalLength ?
              <button onClick={this.expandAnswerList}>Load More Answers</button> :
              null
            }
            {this.state.expanded?
              <button onClick={this.collapseAnswers}>Collapse Answers</button> :
              null
            }
          </div>
        </div>
      </>
    );
  }
}

export default Question