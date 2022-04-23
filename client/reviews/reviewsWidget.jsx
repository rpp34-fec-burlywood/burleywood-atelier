/* eslint-disable react/prop-types */
import React from 'react';
import ReviewList from './components/reviewList.jsx';
import Sorter from './components/sorter.jsx';

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.getReviewsById(undefined, undefined, undefined, this.props.currProd.id);
    }
  }

  render() {
    return (
      <div className="reviews">
        <div>Reviews Widget</div>
        <Sorter/>
        <ReviewList reviews={this.props.reviews}/>
      </div>
    );
  }

}

export default ReviewsWidget;