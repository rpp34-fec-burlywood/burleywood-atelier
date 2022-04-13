import API from './APIRequests.js';

const getReviewsById = function(id) {
  API.getReviewsById(id)
    .then(review => {
      this.setState({
        reviews: review.results
      })
    })
    .catch(err => {
      console.log('Review err', err);
    })
}

var reviewHandlers = {
  getReviewsById
}

export default reviewHandlers;