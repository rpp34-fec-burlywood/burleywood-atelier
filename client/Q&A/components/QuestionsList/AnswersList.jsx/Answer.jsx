/* eslint-disable react/prop-types */
import React from 'react';
import './Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const time = this.props.answer?.date.split('T')[0]
    const user = this.props.answer?.answerer_name
    const helpful = this.props.answer?.helpfulness

    return(
      <div>
        <div className='answer-body'>
          {this.props.answer?.body}
        </div>
        <div className='answer-footer'>
          by user {user} on {time}  |  Helpful? Yes({helpful})
        </div>
      </div>


    );
  }
}

export default Answer;