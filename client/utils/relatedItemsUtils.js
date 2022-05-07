import API from './APIRequests.js';

async function getRelatedProductArray (productID) {
  //returns an array of related Product IDs
  let relatedArr = [...new Set (await API.getRelatedProducts(productID))];
  const fulfilled = await getCardInfo(relatedArr);
  this.setState({relatedProducts: fulfilled});
}

async function getCardInfo(productArr) {
    //returns an array of products by ID
  let productsArr = await Promise.allSettled(productArr.map( async (id) => {
      return API.getProductById(id)
  }));
  //returns an array of products with their styles attached to product.value.style
  let productAndStyles = await Promise.allSettled(productsArr.filter(product => product.status === 'fulfilled').map(async (product) => {
    const stylesList = API.getProductStyleById(product.value.id);
    const rating = getAverage(product.value.id);
      return stylesList.then((styles) =>{
        rating.then((rating) =>{
          product.value.rating = rating;
          })
        const style = styles.results.find(style => style['default?'] === true) || results[0]
        product.value.styles = style;
        console.log(product)
        return product
      })
  }));
  //get fulfilled promises.
  const fulfilled = productAndStyles.filter(result => result.status === 'fulfilled').map(result => result.value);
  return fulfilled;
}

 async function getAverage(productID){
  return API.getReviewMeta(productID)
    .then((ratings) => {
      var average = 0;
      var totalReviews = 0;
      let totalRating = 0;
    for(let rating in ratings.ratings) {
      totalRating += Number(rating) * Number(ratings.ratings[rating])
      totalReviews += Number(ratings.ratings[rating])
    }
    average = totalRating / totalReviews
    return average
    })
}


function handleAddProduct() {
  let storage = [];
  let merged = {};
  merged.value = {...this.state.currProd}
  merged.value.styles = {...this.state.selectedStyle}

  let {ratings} = this.state.reviewMeta

  var average = 0;
  var totalReviews = 0;
  let totalRating = 0;
  for(let rating in ratings) {
    totalRating += Number(rating) * Number(ratings[rating])
    totalReviews += Number(ratings[rating])
  }
  average = totalRating / totalReviews

  merged.rating = average;
  let storedOutfits = JSON.parse(sessionStorage.getItem('outfits')) || [];
  // if your outfits is empty
  if(storedOutfits?.length > 3) {
    $(`#right-outfit`).show()
  }
  if(!sessionStorage.getItem('outfits')) {
    storage.push(merged);
    sessionStorage.setItem('outfits', JSON.stringify(storage));
    this.setState({outfits: storage})

  } else {
    const yourOutfits = [...this.state.outfits]
    const currentOutfit = merged;
    let duplicate = false;
    yourOutfits.forEach(outfit => {
      if(JSON.stringify(outfit) === JSON.stringify(merged) ) {
        duplicate = true;
      }
    })
    if(!duplicate) {
      yourOutfits.unshift(currentOutfit);
      this.setState({outfits: yourOutfits})
      sessionStorage.setItem('outfits', JSON.stringify(yourOutfits));
    }
  }
}

function handleRemoveOutfit(styleID,e) {

  e.stopPropagation();
  let storedOutfits = JSON.parse(sessionStorage.getItem('outfits'));
  let index = storedOutfits.findIndex(outfit => {
    return outfit.value.styles.style_id === styleID
  });
  if(index >= 0) {
    storedOutfits.splice(index, 1);
  }
  sessionStorage.setItem('outfits', JSON.stringify(storedOutfits));
  if(storedOutfits.length === 3) {
    $(`#right-outfit`).hide()
    $(`#left-outfit`).hide()
  }
}

var relatedHandlers = {
  getRelatedProductArray,
  getCardInfo,
  handleAddProduct,
  handleRemoveOutfit,
}

export default relatedHandlers;