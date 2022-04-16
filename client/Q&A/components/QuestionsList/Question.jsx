/* eslint-disable react/prop-types */
import React from 'react';
import AnswersList from './AnswersList.jsx/AnswersList.jsx';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className='question'>
          Q: {this.props.question?.question_body}
        </div>
        <div className='answers'>
          <div className='answer-start'>
            A:
          </div>
          <div className='answers-list'>
            <AnswersList
              answers={this.props.question?.answers}
            />
          </div>
        </div>


      </div>
    );
  }
}

export default Question