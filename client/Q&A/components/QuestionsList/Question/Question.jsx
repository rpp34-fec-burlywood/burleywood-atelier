/* eslint-disable react/prop-types */
import React from 'react';
import AnswersList from '../AnswersList.jsx/AnswersList.jsx';
import AddAnswerModal from '../../AddAnswerModal/AddAnswerModal.jsx';
import API from '../../../../utils/APIRequests.js';
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
    this.upvoteQuestion = this.upvoteQuestion.bind(this);
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
    let newAnswerListLength = this.state.answerListLength + 2
    let isExpanded = newAnswerListLength >= this.state.answerListTotalLength ? true : false
    this.setState({
      answerListLength: newAnswerListLength,
      expanded: isExpanded
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
    this.setState({
      answerModalOpen: true
    })
  }

  upvoteQuestion() {
    API.upvoteQuestion(this.props.question?.question_id)
      .then(res => {console.log(res)})
  }

  render() {
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
          <div> Helpful? </div>
          <div className='question-helpful' onClick={this.upvoteQuestion}>
            Yes ({this.props.question?.question_helpfulness})
          </div>
          <div>
            |
          </div>
          <div className='add-answer' onClick={this.openAnswerModal}>
            Add Answer
          </div>
        </div>
        <div className='answers'>
          <div className='answer-start'>
            {this.state.answerListTotalLength > 0 ? 'A:' : ''}
          </div>
          <div className='answers-list'>
            <AnswersList
              answers={this.returnAnswerObject()}
            />
            {
            this.state.answerListTotalLength > 2 ?
              this.state.expanded ?
                <button onClick={this.collapseAnswers}>Collapse Answers</button> :
                <button onClick={this.expandAnswerList}>Load More Answers</button>
              :
              null
            }
          </div>
        </div>
      </>
    );
  }
}

export default Question;