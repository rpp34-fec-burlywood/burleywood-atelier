import API from './APIRequests.js';

const getProduct = function (numProd = 1, productId = undefined) {

  // Allows for direct set of state.
  if (productId !== undefined) {
    return API.getProductById(productId)
      .then(selectProd => {
        this.setState({
          currProd: selectProd
        });
        this.getProductStyleById(selectProd.id)
      })
      .catch(err => {
        console.log('Fetch Product By Product FAILED', err);

      });
  }

  // Get products
  // Randomize to select 1 product to show
  // Get features and set app state to current product

  return API.getProducts(numProd)
    .then(itemsList => {
      var selectProd = itemsList[Math.floor(Math.random() * numProd)];

      API.getProductById(selectProd.id)
        // API.getProductById(64627) // TESTING PRODUCTS
        // API.getProductById(64625) // TESTING PRODUCTS
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
        defaultStyle: selectedStyle
      })
    })
    .catch(err => {
      console.log('Fetch Styles FAILED', err);
    });
};

const addToCart = function ({ sku_id, count }) {
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

const carouselClickhandler = function (e) {
  e.preventDefault();
  var index = Number(e.target.attributes.index?.value);
  if (index !== this.state.mainImageIndex) {
    this.setState({
      mainImageIndex: index
    });
  }
}

const styleClickHandler = function (e) {
  e.preventDefault();
  var styleId = Number(e.target.attributes.styleid?.value);
  var currentStyleId = this.state.selectedStyle?.style_id;
  // console.log("clicked ID", typeof styleId)
  // console.log(typeof this.state.selectedStyle?.style_id)

  if (styleId !== currentStyleId) {

    for (let availStyle of this.state.currProdStyles) {

      if (styleId === availStyle.style_id) {
        var selectedStyle = availStyle;
        this.setState({
          selectedStyle
        });
        break;
      }
    }
  }
}

/**
 *
 * @param {Positive_move_forward} move
 * @param {selectedStyle.photos.length} max
 */
const arrowXClickHandler = function (move, max, cb = ()=>{}) {
  var currentI = this.state.mainImageIndex
  if (move > 0 && currentI < max - 1) {
    this.setState({
      mainImageIndex : currentI + 1
    })
    cb(currentI + 1)
  } else if (move < 0 && currentI > 0) {
    this.setState({
      mainImageIndex : currentI - 1
    })
    cb(currentI - 1)
  }
}

var overviewHandlers = {
  getProduct,
  getProductStyleById,
  addToCart,
  carouselClickhandler,
  styleClickHandler,
  arrowXClickHandler,
}

export default overviewHandlers;