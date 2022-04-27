/* eslint-disable react/prop-types */
import React from 'react';
import API from '../../../../utils/APIRequests';
import './Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.reportAnswer = this.reportAnswer.bind(this);
  }

  reportAnswer() {
    API.reportAnswer(this.props.answer?.id)
  }

  render() {
    const months = [
      "January", 
      "February",
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ]

    const time = this.props.answer?.date.split('T')[0].split('-');
    const year = time[0]
    const month = months[parseInt(time[1]) - 1]
    const day = time[2]
    const user = this.props.answer?.answerer_name
    const helpful = this.props.answer?.helpfulness

    return(
      <>
        <div className='answer-body'>
          {this.props.answer?.body}
        </div>
        <div className='answer-footer'>
          <div className='footer-ele'>
            by user {user} on {`${month} ${day}, ${year}`}
          </div>
          <div className='footer-ele'>
            |
          </div>
          <div className='footer-ele'>
            Helpful?
          </div>
          <div className='footer-ele answer-helpful'>
            Yes ({helpful})
          </div>
          <div className='footer-ele'>
            |
          </div>
          <div className='footer-ele answer-report' onClick={this.reportAnswer}>
            Report
          </div>
        </div>
      </>
    );
  }
}

export default Answer;