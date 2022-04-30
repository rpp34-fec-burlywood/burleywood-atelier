/* eslint-disable react/prop-types */
import React from 'react';
import ReviewList from './components/reviewList.jsx';
import RatingsBreakdown from './components/ratingsBreakdown.jsx';
import './style.css';

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.getReviewsById(undefined, 10, 'helpfulness', 64626/*this.props.currProd.id*/);
    }
  }

  render() {
    return (
<<<<<<< HEAD
      <div className='reviews'>
=======
      <div id="reviews">
>>>>>>> f65572c694677a32d307021b6e2e3ee7c5d4d16f
        <div id='title'> RATINGS & REVIEWS </div>
        <div id='ratings'>
        <RatingsBreakdown reviews={this.props.reviews}/>
        <ReviewList
          reviews={this.props.reviews}
          markReviewHelpful={this.props.markReviewHelpful}
          reportReview={this.props.reportReview}
        />
      </div>
    </div>
    );
  }

}

export default ReviewsWidget;