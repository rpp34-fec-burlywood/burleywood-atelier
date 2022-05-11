/* eslint-disable react/prop-types */
import React from 'react';
import API from '../../../../utils/APIRequests';
import Thumbnail from './Thumbnail/Thumbnail.jsx';
import './Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: 0
    }
    this.reportAnswer = this.reportAnswer.bind(this);
    this.upvoteAnswer = this.upvoteAnswer.bind(this);
  }

  reportAnswer() {
    API.reportAnswer(this.props.answer?.id)
      .then(res => {console.log(res)});
  }

  upvoteAnswer() {
    API.upvoteAnswer(this.props.answer?.id)
      .then(res => {
        console.log(res)
        const currUpvotes = this.state.upvotes;
        this.setState({upvotes: currUpvotes + 1})
      });
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
    const helpful = this.props.answer?.helpfulness + this.state.upvotes
    // <Thumbnail thumbnailLink={link} key={index}/>
    return(
      <>
        <div className='answer-body'>
          {this.props.answer?.body}
        </div>
        <div className='qa-thumbnail-icon-list'>
          {this.props.answer?.photos?.map((link, index) => (
              <Thumbnail thumbnailLink={link} key={index}/>
          ))}
        </div>
        <div className='answer-footer'>
          <div className='footer-ele answer-user'>
            by user {user.toLowerCase() === 'seller' ? <b>Seller</b> : user} on {`${month} ${day}, ${year}`}
          </div>
          <div className='footer-ele bar-sep'>
            |
          </div>
          <div className='footer-ele answer-helpful-text'>
            Helpful?
          </div>
          <div className='footer-ele answer-helpful' onClick={this.upvoteAnswer}>
            Yes ({helpful})
          </div>
          <div className='footer-ele bar-sep'>
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