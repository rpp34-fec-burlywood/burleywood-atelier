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
      // console.log('-- Get Products OK\n', response.data);
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
      // console.log('-- Get Product by ID OK\n', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Product by ID FAILED:', err.response.data);
      return err;
    });
}

const getRelatedProducts = (id) => {
  return axios({
    method: 'GET',
    url: `/products/${id}/related`
  })
    .then((response) => {
      // console.log('-- Received related products ', response.data);
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
      // console.log('-- Get styles OK ', response.data);
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
    // params: {
    //   page: page,
    //   count: count,
    //   sort: sort,
    //   id: id
    // }
  })
    .then((response) => {
      // console.log('-- Get Reviews OK ', response.data);
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
      // console.log('-- Get Review Meta OK ', response.data);
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
      // console.log('-- POST Review OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- POST Review failed ', err.response.data);
    });
}

const markReviewHelpful = (review_id) => {
  return axios({
    method: 'PUT',
    url: `/reviews/reviews/${review_id}/helpful`,
  })
    .then((response) => {
      // console.log('-- Mark Helpful OK ', response.data);
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
      // console.log('-- Mark Helpful OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Mark Helpful failed ', err.response.data);
    });
  }

const getQuestions = (product_id) => {
  return axios({
    method: 'GET',
    url: `/qa/questions/${product_id}`
  })
    .then((response) => {
      // console.log('-- Get Questions OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Questions failed ', err.response.data);
    });
}

const postQuestion = (product_id, data) => {
  return axios({
    method: 'POST',
    url: `/qa/questions/${product_id}`,
    data: data
  })
    .then((response) => {
      // console.log('-- Add Question OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Add Question failed ', err.response.data);
    });
}


const addToCart = (sku_id, count = 1) => {
  return axios ({
    method: 'POST',
    url: `/cart/${sku_id}/${count}`,
  })
  .then((response) => {
      // console.log('-- Add to Cart OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Add to Cart FAILED ', err.response.data);
    });
}

var api = {
  getProducts,
  getProductById,
  getRelatedProducts,
  getProductStyleById,
  getReviewsById,
  getQuestions,
  addToCart,
  getReviewMeta,
  postReview,
  markReviewHelpful,
  reportReview,
  getQuestions,
  postQuestion
};

export default api;