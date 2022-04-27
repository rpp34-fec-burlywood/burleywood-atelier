/* eslint-disable react/prop-types */
import React from 'react';
import Question from './Question/Question.jsx';
import Footer from '../Footer/Footer.jsx';
import './QuestionsList.css';
class QuestionsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerListLength: 2,
      answerListCurrent: this.props.questions?.results?.slice(0, 2),
      answerListTotal: this.props.questions?.results,
      fullyExpanded: false
    }

    this.loadMoreQuestionsHandler = this.loadMoreQuestionsHandler.bind(this);
    this.collapseQuestions = this.collapseQuestions.bind(this);
  }
  
  componentDidUpdate(prevProps) {

    // since this.props.questions is empty initally, you have to repopulate the state
    if (prevProps !== this.props) {
      this.setState({
        answerListCurrent: this.props.questions?.results?.slice(0, 2),
        answerListTotal: this.props.questions?.results,
      })
    }

    const questionListDiv = document.getElementById("question-List");
    questionListDiv.scrollTop = questionListDiv.scrollHeight;
  }

  loadMoreQuestionsHandler() {
    let currentAnswerListLength = this.state.answerListLength + 2
    this.setState({
      answerListLength: currentAnswerListLength,
      answerListCurrent: this.state.answerListTotal.slice(0, currentAnswerListLength)
    })
    if (currentAnswerListLength >= this.state.answerListTotal.length) {
      this.setState({
        fullyExpanded: true
      })
    }
  }

  collapseQuestions() {
    let currentAnswerListLength = 2
    this.setState({
      answerListLength: currentAnswerListLength,
      answerListCurrent: this.state.answerListTotal.slice(0, currentAnswerListLength),
      fullyExpanded: false
    })
  }

  render() {
    return(
      <>
        <div id='question-List'>
          {this.state.answerListCurrent?.map((q, i) => (
            <Question 
              key={i + 50} 
              question={q} 
              addAnswerClickHandler={this.props.addAnswerClickHandler}
            />
          ))}
        </div>
        <Footer 
          addQuestionClickHandler={this.props.addQuestionClickHandler}
          loadMoreQuestionsHandler={this.loadMoreQuestionsHandler}
          loadMoreQuestions={!this.state.fullyExpanded}
          collapseQuestions={this.collapseQuestions}
          questions={this.props.questions}
        />
      </>
    );
  }
}

export default QuestionsList;