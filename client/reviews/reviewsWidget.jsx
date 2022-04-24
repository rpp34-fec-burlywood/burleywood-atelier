/* eslint-disable react/prop-types */
import React from 'react';
import ReviewList from './components/reviewList.jsx';
import RatingsBreakdown from './components/ratingsBreakdown.jsx';

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.getReviewsById(undefined, undefined, undefined, 64620/*this.props.currProd.id*/);
    }
  }

  render() {
    console.log("widget", this.props);
    return (
<<<<<<< HEAD
      <div className="reviews">
        <div>Reviews Widget</div>
        <Sorter/>
        <ReviewList reviews={this.props.reviews}/>
=======
      <div>
        <div>Reviews & Reviews</div>
        <RatingsBreakdown reviews={this.props.reviews}/>
        <ReviewList
          reviews={this.props.reviews}
          markReviewHelpful={this.props.markReviewHelpful}
          reportReview={this.props.reportReview}
        />
>>>>>>> origin
      </div>
    );
  }

}

export default ReviewsWidget;