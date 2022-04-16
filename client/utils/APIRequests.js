import axios from 'axios';

const getProducts = (numItems) => {
  var count = '';
  if (numItems !== undefined) {
    count = { count: numItems };
  }
  return axios({
    method: 'GET',
    url: `/products`,
    params: count,
  })
    .then((response) => {
      console.log('-- Get Products OK\n', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Products FAILED:', err.response.data);
    });
};

const getProductById = (id) => {
  return axios({
    method: 'GET',
    url: `/products/${id}`,
  })
    .then((response) => {
      console.log('-- Get Product by ID OK\n', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Product by ID FAILED:', err.response.data);
    });
}

const getRelatedProducts = (id) => {
  return axios({
    method: 'GET',
    url: `/products/${id}/related`
  })
    .then((response) => {
      console.log('-- Received related products ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Related products failed ', err.response.data);
    });
}

const getProductStyleById = (id) => {
  return axios({
    method: 'GET',
    url: `/products/${id}/styles`
  })
    .then((response) => {
      console.log('-- Get styles OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Related products failed ', err.response.data);
    });
}

const getReviewsById = (page, count, sort, id) => {
  page = page === undefined ? 1 : page;
  count = count === undefined ? 5 : count;
  sort = sort === undefined ? 'newest' : sort;

  return axios({
    method: 'GET',
    url: `/reviews/${id}`,
    params: {
      page: page,
      count: count,
      sort: sort,
      id: id
    }
  })
    .then((response) => {
      console.log('-- Get Reviews OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Reviews failed ', err.response.data);
    });
}

const getReviewMeta = (id) => {
  return axios({
    method: 'GET',
    url: `/reviews/meta`,
    params: {
      id: id
    }
  })
    .then((response) => {
      console.log('-- Get Review Meta OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Review Meta failed ', err.response.data);
    });
}

const postReview = (id, rating, summary, body, recommend, name, email, photos, characteristics) => {
  return axios({
    method: 'POST',
    url: `/reviews`,
    params: {
      id: id,
      rating: rating,
      summary: summary,
      body: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    }
  })
    .then((response) => {
      console.log('-- POST Review OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- POST Review failed ', err.response.data);
    });
}

const markReviewHelpful = (review_id) => {
  return axios({
    method: 'PUT',
    url: `/reviews/${review_id}/helpful`,
    params: {
      review_id: review_id
    }
  })
    .then((response) => {
      console.log('-- Mark Helpful OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Mark Helpful failed ', err.response.data);
    });
}

const reportReview = (review_id) => {
  return axios({
    method: 'PUT',
    url: `/reviews/${review_id}/report`,
    params: {
      review_id: review_id
    }
  })
    .then((response) => {
      console.log('-- Mark Helpful OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Mark Helpful failed ', err.response.data);
    });
}

var api = {
  getProducts,
  getProductById,
  getRelatedProducts,
  getProductStyleById,
  getReviewsById,
  getReviewMeta,
  postReview,
  markReviewHelpful,
  reportReview
};

export default api;