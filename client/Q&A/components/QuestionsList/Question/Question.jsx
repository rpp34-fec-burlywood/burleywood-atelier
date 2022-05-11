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
      answers: props.question?.answers,
      expanded: false,
      answerModalOpen: false,
      upvotes: 0
    }

    this.returnAnswerObject = this.returnAnswerObject.bind(this);
    this.expandAnswerList = this.expandAnswerList.bind(this);
    this.collapseAnswers = this.collapseAnswers.bind(this);
    this.closeAnswerModal = this.closeAnswerModal.bind(this);
    this.openAnswerModal = this.openAnswerModal.bind(this);
    this.upvoteQuestion = this.upvoteQuestion.bind(this);
    this.filterAnswerList = this.filterAnswerList.bind(this);
  }

  componentDidMount() {
    if (this.state.answerListTotalLength < 2) {
      this.setState({
        answerListLength: this.state.answerListTotalLength
      })
    }
  }

  filterAnswerList(answerId) {
    answerId = +answerId;
    let newAnswerList = this.state.answers.filter((ele) => {
      return ele.id !== answerId
    })
    let currAnswerListTotalLength = this.state.answerListTotalLength;
    this.setState({
      answers: newAnswerList,
      answerListTotalLength: currAnswerListTotalLength - 1
    })
  }

  returnAnswerObject() {
    let answerObject = {};
    let answers = this.state.answers;
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
    let upvotedQuestionsArray = JSON.parse(sessionStorage.getItem('upvotedQuestions')) || [];
    if (!upvotedQuestionsArray.includes(this.props.question?.question_id)) {
      API.upvoteQuestion(this.props.question?.question_id)
      .then(res => {
        console.log(res)
        const currUpvotes = this.state.upvotes;
        this.setState({upvotes: currUpvotes + 1})
        upvotedQuestionsArray.push(this.props.question?.question_id)
        sessionStorage.setItem('upvotedQuestions', JSON.stringify(upvotedQuestionsArray))
      });
    }
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
          <div className='helpful-text'>
            Helpful?
          </div>
          <div className='question-helpful' onClick={this.upvoteQuestion}>
            Yes ({this.props.question?.question_helpfulness + this.state.upvotes})
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
              setAnswerList={this.filterAnswerList}
              answers={this.returnAnswerObject()}
            />
            {

            this.state.answerListTotalLength > 2 ?
              this.state.expanded ?
                <div className='answer-expand-collapse' onClick={this.collapseAnswers}>COLLAPSE ANSWERS</div> :
                <div className='answer-expand-collapse' onClick={this.expandAnswerList}>LOAD MORE ANSWERS</div>
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