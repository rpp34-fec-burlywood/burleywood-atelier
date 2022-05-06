import API from './APIRequests.js';

const getReviewsById = function(page, count, sort, id) {
  API.getReviewsById(page, count, sort, id)
    .then(review => {
      // console.log("Reviewed");
      this.setState({
        reviews: review.results
      })
    })
    .catch(err => {
      console.log('Get Review err', err);
    })
}

const markReviewHelpful = function(review_id) {
  API.markReviewHelpful(review_id)
    .then(result => {
      console.log('Review Marked Helpful');
    })
    .catch(err => {
      console.log('Review Marked Helpful err', err);
    })
}

const reportReview = function(review_id) {
  API.getReviewsById(review_id)
    .then(result => {
      console.log('Review Reported');
      this.setState({
        reviews: review.results
      })
    })
    .catch(err => {
      console.log('Report Review err', err);
    })
}

const postReview = function(review_id) {
  API.getReviewsById(review_id)
    .then(result => {
      console.log('Review Posted');
    })
    .catch(err => {
      console.log('Report Post err', err);
    })
}

const getReviewMeta = function(product_id) {
  API.getReviewMeta(product_id)
    .then(result => {
      // console.log('Review Meta X', result);
      this.setState({
        reviewMeta: result
      })
    })
    .catch(err => {
      console.log('Report Meta err', err);
    })
}

var reviewHandlers = {
  getReviewsById,
  reportReview,
  markReviewHelpful,
  getReviewMeta,
  postReview
}

export default reviewHandlers;