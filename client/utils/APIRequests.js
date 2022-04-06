import axios from 'axios';

const getProducts = (numItems) => {
  var count = '';
  if (numItems !== undefined) {
    count = { count: numItems };
  }
  axios({
    method: 'GET',
    url: `/products`,
    params: count,
  })
    .then((response) => {
      console.log('-- Get Products OK\n', response.data);
    })
    .catch((err) => {
      console.log('-- Get Products FAILED:', err.response.data);
    });
};

const getProductById = (id) => {
  axios({
    method: 'GET',
    url: `/products/${id}`,
  })
    .then((response) => {
      console.log('-- Get Product by ID OK\n', response.data);
    })
    .catch((err) => {
      console.log('-- Get Product by ID FAILED:', err.response.data);
    });
}

var api = {
  getProducts,
  getProductById,
};

export default api;