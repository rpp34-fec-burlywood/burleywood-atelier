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

const getReviewsById = (id) => {
  return axios({
    method: 'GET',
    url: `/reviews/${id}`
  })
    .then((response) => {
      console.log('-- Get Reviews OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Reviews failed ', err.response.data);
    });
}

const getQuestions = (product_id) => {
  return axios({
    method: 'GET',
    url: `/qa/questions/${product_id}`
  })
    .then((response) => {
      console.log('-- Get Questions OK ', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('-- Get Questions failed ', err.response.data);
    });
}

var api = {
  getProducts,
  getProductById,
  getRelatedProducts,
  getProductStyleById,
  getReviewsById,
  getQuestions
};

export default api;