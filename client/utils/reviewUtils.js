import API from './APIRequests.js';

const getReviewsById = function(page, count, sort, id) {
  API.getReviewsById(page, count, sort, id)
    .then(review => {
      this.setState({
        reviews: review.results
      })
    })
    .catch(err => {
      console.log('Get Review err', err);
    })
}

var reviewHandlers = {
  getReviewsById
}

export default reviewHandlers;