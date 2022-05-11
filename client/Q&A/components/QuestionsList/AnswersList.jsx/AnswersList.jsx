/* eslint-disable react/prop-types */
import React from 'react';
import Answer from './Answer.jsx';
class AnswersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.answers ? Object.keys(this.props.answers).map((key, i) => (
            <Answer 
              key={i + 524} 
              answer={this.props.answers[key]}
              setAnswerList={this.props.setAnswerList}
            />
        )) : ''}
      </div>
    );
  }
}

export default AnswersList;