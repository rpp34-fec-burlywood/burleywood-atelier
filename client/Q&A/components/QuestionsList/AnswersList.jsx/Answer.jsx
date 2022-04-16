/* eslint-disable react/prop-types */
import React from 'react';
import './Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
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
    const month = months[parseInt(time[1])]
    const day = time[2]
    const user = this.props.answer?.answerer_name
    const helpful = this.props.answer?.helpfulness

    return(
      <div>
        <div className='answer-body'>
          {this.props.answer?.body}
        </div>
        <div className='answer-footer'>
          by user {user} on {`${month} ${day}, ${year}`} | Helpful? Yes ({helpful}) | Report
        </div>
      </div>
    );
  }
}

export default Answer;