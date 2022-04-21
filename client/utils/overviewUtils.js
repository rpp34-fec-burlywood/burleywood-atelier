import API from './APIRequests.js';

const getProduct = function (numProd = 1) {
  // Get products
  // Randomize to select 1 product to show
  // Get features and set app state to current product

  return API.getProducts(numProd)
    .then(itemsList => {
      var selectProd = itemsList[Math.floor(Math.random() * numProd)];

      // API.getProductById(selectProd.id)
      API.getProductById(64627) // TESTING PRODUCTS
        .then(selectProd => {
          this.setState({
            currProd: selectProd
          });
          this.getProductStyleById(selectProd.id)
        })
      return selectProd;
    })
    .catch(err => {
      console.log('Fetch Featured Product FAILED', err);
    });
};

const getProductStyleById = function (prodId) {
  API.getProductStyleById(prodId)
    .then(stylesList => {
      var results = stylesList.results;
      var selectedStyle = results[0];

      for (let style of results) {
        if (style['default?'] === true) {
          selectedStyle = style;
          break;
        }
      }

      this.setState({
        currProdStyles: results,
        selectedStyle: selectedStyle,
      })
    })
    .catch(err => {
      console.log('Fetch Styles FAILED', err);
    });
};

const addToCart = function ({sku_id, count}) {
  if (!sku_id) {
    return;
  }
  API.addToCart(sku_id, count)
    .then(response => {
      if (response === 'Created') {
        window.alert('Added to Cart!')
      }
    });

};

var overviewHandlers = {
  getProduct,
  getProductStyleById,
  addToCart
}

export default overviewHandlers;