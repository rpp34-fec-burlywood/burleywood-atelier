/* eslint-disable react/prop-types */
import React from 'react';
import Question from './Question.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.questions?.results?.map((q, i) => (
          <Question key={i + 50} question={q}/>
        ))}
      </div>
    );
  }
}

export default QuestionsList;