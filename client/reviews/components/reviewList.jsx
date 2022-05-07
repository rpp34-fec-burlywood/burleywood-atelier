/* eslint-disable react/prop-types */
import React from 'react';
import Review from './review.jsx';
import NewReview from './newReview.jsx';
import './style.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewNum: 2,
      showModal: false,
      moreReviews: true
    }

    this.addReviews = this.addReviews.bind(this);
    this.hideReviews = this.hideReviews.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.sort = this.sort.bind(this);
  }

  addReviews() {
    if (this.state.reviewNum < this.props.reviews.length) {
      this.setState((state) => ({
        reviewNum: state.reviewNum + 2
      }));
    }

    if (this.props.reviews.length <= this.state.reviewNum) {
      this.setState({
        moreReviews: false
      })
    }

  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  hideReviews() {
    if (this.state.reviewNum > 2) {
      this.setState((state) => ({
        reviewNum: 2,
        moreReviews: true
      }));
    }
  }

  sort(e) {
    this.props.sort(e.target.value);
  }

  render() {
    var length = this.props.reviews.length;
    var renders = this.props.reviews.slice(0, this.state.reviewNum);

    var moreReviews = true;
    var button;
    var selector;

    if (this.state.moreReviews) {
      button = <button className='button' onClick={this.addReviews}>MORE REVIEWS</button>;
    } else {
      button = <button className='button' onClick={this.hideReviews}>HIDE REVIEWS</button>;
    }

    return(
      <div id='list'>
      <div id='sorting'>
        {`${length} Reviews, sorted by `}
        <select name="sort" id="sort" onChange={this.sort}>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
          <option value="relevant">relevant</option>
        </select>
      </div>
      <div id='revlist'>
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
      </div>
      <div id='buttons'>
        {button}
        <button className='button' onClick={this.toggleModal}> {`ADD A REVIEW \u002b`} </button>
        <NewReview showModal={this.state.showModal} closeModal={this.toggleModal} postReview={this.props.postReview} currProd={this.props.currProd}/>
      </div>
      </div>
    );
  }

}

export default ReviewList;