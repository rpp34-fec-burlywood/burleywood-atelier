/* eslint-disable react/prop-types */
import './reviews.css'
import React from 'react';
import Stars from '../../stars.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.data.helpfulness,
      photos: true
    }
    this.markReviewHelpful = this.markReviewHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
  }

  markReviewHelpful(e) {
    this.setState({
      helpfulness: this.state.helpfulness + 1
    })
    this.props.markReviewHelpful(e.target.id.substring(1));
    // console.log('Marked review as helpful.')
  }

  reportReview(e) {
    this.props.reportReview(e.target.id.substring(1));
    // console.log('Substring', e.target.id.substring(1));
    // console.log('Reported Review.')
  }

  render() {
    var review = this.props.data;

    const months = {
      '01' : "January",
      '02' : "February",
      '03' : "March",
      '04' : "April",
      '05' : "May",
      '06' : "June",
      '07' : "July",
      '08' : "August",
      '09' : "September",
      '10' : "October",
      '11' : "November",
      '12' : "December"
    }

    const date = review.date.split('T')[0].split('-');
    const year = date[0];
    const month = months[date[1]];
    const day = date[2];
    var dateText = `${month} ${day}, ${year}`;

    return(
      <div id='review'>
        <div id='info'>
          <span id='review_stars'> <Stars stars={review.rating}/> </span>
          <span id='username'> {`${review.reviewer_name}, ${dateText}`} </span>
        </div>
        <div id='summary'> {review.summary} </div>
        <div id='body'> {review.body} </div>
        <div id='images'>
          {
            review.photos.map((photo) => {
              if (photo !== undefined){
                return (<img key={photo.id} src={photo.url}/>);
              }
            })
          }
        </div>
        {
          review.recommend ? (<div id='recommended'> {`\u2713 I recommend this product`} </div>) : (<div> </div>)
        }
        <div id='commentary'>
          <span> {`Helpful?  `} </span>
          <span onClick={this.markReviewHelpful} className='clickable' id={'h' + review.review_id}> {`Yes`} </span>
          <span > {` (${this.state.helpfulness})  |`} </span>
          <span onClick={this.reportReview} className='clickable' id={'r' + review.review_id}> {`  Report`}</span>
        </div>
      </div>
    );
  }

}

export default Review;