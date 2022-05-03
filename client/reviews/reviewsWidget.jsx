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
      this.props.getReviewsById(1, 10, 'newest', 64626/*this.props.currProd.id*/);
      this.props.getReviewMeta(64626);
    }
  }

  render() {
    console.log('This', this.props.getReviewMeta);
    return (
      <div id='reviews'>
        <div id='title'> RATINGS & REVIEWS </div>
        <div id='ratings'>
        <RatingsBreakdown reviewMeta={this.props.reviewMeta}/>
        <ReviewList
          reviews={this.props.reviews}
          markReviewHelpful={this.props.markReviewHelpful}
          reportReview={this.props.reportReview}
          postReview={this.props.postReview}
        />
      </div>
    </div>
    );
  }

}

export default ReviewsWidget;