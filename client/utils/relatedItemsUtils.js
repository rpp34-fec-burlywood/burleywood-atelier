import API from './APIRequests.js';


  async function getRelatedProductArray (productID)  {
  var styleArr = [];
  let relatedArr = await API.getRelatedProducts(productID)
  for(let i = 0; i < relatedArr.length; i++) {
    API.getProductById(relatedArr[i])
      .then((product) => {
        API.getProductStyleById(product.id)
        .then((stylesList) => {
          var styleObj = {}
          var results = stylesList.results;
          for (let style of results) {
            var styleObj = {}
            if (style['default?'] === true) {
              styleObj.id = stylesList.product_id,
              styleObj.name = product.name,
              styleObj.original_price = style.original_price,
              styleObj.sale_price = style.sale_price,
              styleObj.photos = style.photos,
              styleArr.push(styleObj)
            }
          }
          this.setState({
            relatedProducts: styleArr
          })
      })
    })
  }
}

var relatedHandlers = {
  getRelatedProductArray,
}

export default relatedHandlers;