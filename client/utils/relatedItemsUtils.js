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
      return stylesList.then((styles) =>{
        const style = styles.results.find(style => style['default?'] === true) || results[0]
        product.value.styles = style;
        return product
      })
  }));
  //get fulfilled promises.
  const fulfilled = productAndStyles.filter(result => result.status === 'fulfilled').map(result => result.value);
  return fulfilled;
}

function handleAddProduct() {
  let storage = [];
  let merged = {};
  // merged.value = {...this.props.currProd}
  // merged.value.styles = {...this.props.selectedStyle}
  merged.value = {...this.state.currProd}
  merged.value.styles = {...this.state.selectedStyle}
  let storedOutfits = JSON.parse(sessionStorage.getItem('outfits'));
  // if your outfits is empty
  if(storedOutfits?.length > 3) {
    $(`#right-outfit`).show()
  }
  if(!sessionStorage.getItem('outfits')) {
    storage.push(merged);
    sessionStorage.setItem('outfits', JSON.stringify(storage));
    this.setState({outfits: storage})
    // this.props.outfitUpdater(storage)
  } else {
    // const yourOutfits = [...this.props.outfits]
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
      // this.props.outfitUpdater(yourOutfits)
      sessionStorage.setItem('outfits', JSON.stringify(yourOutfits));
    }
  }
}

function handleRemoveOutfit(styleID) {
  let storedOutfits = JSON.parse(sessionStorage.getItem('outfits'));
  console.log(storedOutfits)
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
  this.setState({outfits: yourOutfits})
  // this.props.outfitUpdater(storedOutfits)
}

var relatedHandlers = {
  getRelatedProductArray,
  getCardInfo,
  handleAddProduct,
  handleRemoveOutfit,
}

export default relatedHandlers;