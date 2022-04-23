/* eslint-disable react/prop-types */
import React from 'react';
import Review from './review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewNum: 2,
      showModal: false
    }

    this.addReviews = this.addReviews.bind(this);
    this.hideReviews = this.hideReviews.bind(this);
  }

  addReviews() {
    if (this.state.reviewNum < this.props.reviews.length) {
      this.setState((state) => ({
        reviewNum: state.reviewNum + 2
      }));
    }
    console.log(this.state.reviewNum);
  }

  hideReviews() {
    if (this.state.reviewNum > 2) {
      this.setState((state) => ({
        reviewNum: 2
      }));
    }
    console.log(this.state.reviewNum);
  }

  render() {
    var length = this.props.reviews.length;
    var renders = this.props.reviews.slice(0, this.state.reviewNum);
    console.log("List", this.props);
    return(
      <div>
      <div>-----------------</div>
      <div>{`${length} Reviews, sorted by helpful`}</div>
      <div>-----------------</div>
      {
        renders.map((review) => (
            <Review
              key={review.review_id}
              data={review}
              markReviewHelpful={this.props.markReviewHelpful}
              reportReview={this.props.reportReview}
            />
        ))
      }
      <div>
        <button onClick={this.addReviews}>More Reviews</button>
        <button onClick={this.hideReviews}>Hide Reviews</button>
        <button>Add Review</button>
      </div>
      </div>
    );
  }

}

export default ReviewList;