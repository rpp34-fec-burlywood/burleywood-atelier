/* eslint-disable react/prop-types */
import React from 'react';
import ReviewList from './components/reviewList.jsx';
import RatingsBreakdown from './components/ratingsBreakdown.jsx';
import './style.css';

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.getReviewsById(1, 1000, 'helpful', /*64626*/this.props.currProd.id);
      this.props.getReviewMeta(this.props.currProd.id);

    }
  }

  sort(order) {
    this.props.getReviewsById(1, 1000, order, this.props.currProd.id);
  }

  render() {
    // console.log('This', this.props.getReviewMeta);
    return (
      <div id='reviews'>
        <div id='title'> RATINGS & REVIEWS </div>
        <div id='ratings'>
        <RatingsBreakdown reviewMeta={this.props.reviewMeta}/>
        <ReviewList
          reviewMeta={this.props.reviewMeta}
          currProd={this.props.currProd}
          reviews={this.props.reviews}
          markReviewHelpful={this.props.markReviewHelpful}
          reportReview={this.props.reportReview}
          postReview={this.props.postReview}
          sort={this.sort}
        />
      </div>
    </div>
    );
  }

}

export default ReviewsWidget;