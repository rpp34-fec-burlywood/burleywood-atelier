/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Review from './review.jsx';
import NewReview from './newReview.jsx';
import './style.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewNum: 2,
      showModal: false
    }

    this.addReviews = this.addReviews.bind(this);
    this.hideReviews = this.hideReviews.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  addReviews() {
    if (this.state.reviewNum < this.props.reviews.length) {
      this.setState((state) => ({
        reviewNum: state.reviewNum + 2
      }));
    }
    console.log(this.state.reviewNum);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
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
      <div id='list'>
      <div id='sorting'>{`${length} Reviews, sorted by helpful`}</div>
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
      <div id='buttons'>
        <button onClick={this.addReviews}>MORE REVIEWS</button>
        <button onClick={this.hideReviews}>HIDE REVIEWS</button>
        <button onClick={this.toggleModal}> {`ADD A REVIEW \u002b`} </button>
        <NewReview showModal={this.state.showModal} closeModal={this.toggleModal} postReview={this.props.postReview}/>
      </div>
      </div>
    );
  }

}

export default ReviewList;