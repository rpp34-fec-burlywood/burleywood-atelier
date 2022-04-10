import API from './APIRequests.js';

async function getRelatedProductArray (productID) {
  //returns an array of related Product IDs
  let relatedArr = await API.getRelatedProducts(productID);
  const fulfilled = await getCardInfo(relatedArr);
  this.setState({relatedProducts: fulfilled});
}

async function getCardInfo(productArr) {
    //returns an array of products by ID
  let productsArr = await Promise.allSettled(productArr.map( async (id) => {
      return API.getProductById(id)
  }));
  //returns an array of products with their styles attached to product.value.style
  let relatedProductsArr = await Promise.allSettled(productsArr.filter(product => product.status === 'fulfilled').map(async (product) => {
    const stylesList = API.getProductStyleById(product.value.id);
      return stylesList.then((styles) =>{
        product.value.styles = styles;
        return product
      })
  }));
  //get fulfilled promises.
  const fulfilled = relatedProductsArr.filter(result => result.status === 'fulfilled').map(result => result.value);
  return fulfilled;
}

var relatedHandlers = {
  getRelatedProductArray,
  getCardInfo
}

export default relatedHandlers;