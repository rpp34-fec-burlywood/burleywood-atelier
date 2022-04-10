import API from './APIRequests.js';

async function getRelatedProductArray (productID) {
  //returns an array of product IDs
  let relatedArr = await API.getRelatedProducts(productID);
  let productsArr = await Promise.all(relatedArr.map( async (id) => {
    try {
      return await API.getProductById(id)
    } catch (err) {
      console.log(err)
    }
  }))
  let relatedProductsArr = await Promise.all(productsArr.map(async (product) => {
    try {
      const stylesList = API.getProductStyleById(product.id);
      return stylesList.then((styles) =>{
        const results = styles.results
        product.styles = styles;
        return product
      })
    } catch(err) {
      console.log(err)
    }
  }))
  this.setState({relatedProducts: relatedProductsArr})
}

var relatedHandlers = {
  getRelatedProductArray,
}

export default relatedHandlers;