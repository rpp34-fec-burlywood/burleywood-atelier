/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './components/productCard.jsx';
import YourOutfit from './components/yourOutfit.jsx';
import $ from 'jquery';
class RelatedItems extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      outfits: []
    }
    this.slideRight = this.slideRight.bind(this)
    this.slideLeft = this.slideLeft.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveOutfit = this.handleRemoveOutfit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      //NOTE this is hardcoded
      //64626 = more than 4 products
      //64621 = less than 4
      // this.props.initialize(this.props.currProd.id);
      this.props.initialize(64626);

      // let outfits = JSON.parse(sessionStorage.getItem('outfits')) || [];
      // this.setState({outfits: outfits})
    }
  }
  slideRight(id) {
    var num;
    id === 'related' ? num = 0 : num = 244
    var element = document.getElementById(`${id}-list`);
    const scrollLength = (element.offsetWidth + num) / 4
    element.scrollLeft += scrollLength;
    var $container=$(`#${id}-list`);
    var scrollLeftValue = $container.scrollLeft(),
        width=$container.width(),
        scrollWidth=$container.get(0).scrollWidth;
    var offset=278;
    console.log(scrollWidth)
    console.log(element.offsetWidth)
    console.log(width)

    if (scrollWidth - scrollLeftValue - width <= offset) {
     {
         $(`#right-${id}`).hide()
         $(`#left-${id}`).show()
    }
   } else {
    $(`#right-${id}`).show()
    $(`#left-${id}`).show()
   }
 }

 slideLeft (id){
  var num, extraWidth, offset
  id === 'related' ? num = 0 : num = 242;
  // id === 'related' ? extraWidth = 0 : extraWidth = -242;
  // id === 'related' ? offset = 240 : offset = 243;
  var element = document.getElementById(`${id}-list`);
  const scrollLength = (element.offsetWidth + num) / 4
  element.scrollLeft -= scrollLength;
  var $container=$(`#${id}-list`);
  var scrollLeftValue = $container.scrollLeft(),
      width=$container.width(),
      scrollWidth=$container.get(0).scrollWidth;
      // console.log(scrollLeftValue)
  // offset = 240;
  // offset + scrollLeftValue + width + extraWidth <= scrollWidth)
    if (  scrollLeftValue <= 242) {
     {
         $(`#right-${id}`).show()
         $(`#left-${id}`).hide()
    }
   } else {
    $(`#right-${id}`).show()
    $(`#left-${id}`).show()
   }

}

handleAddProduct() {
  let storage = [];
  let merged = {};
  merged.value = {...this.props.currProd}
  //need suggestion here on how to get the stars of currenProd
  console.log(this.props.currProd)
  merged.value.styles = {...this.props.selectedStyle}
  let storedOutfits = JSON.parse(sessionStorage.getItem('outfits')) || [];
  // if your outfits is empty
  if(storedOutfits?.length > 3) {
    $(`#right-outfit`).show()
  }
  if(!sessionStorage.getItem('outfits')) {
    storage.push(merged);
    sessionStorage.setItem('outfits', JSON.stringify(storage));
    this.props.outfitUpdater(storage)
  } else {
    const yourOutfits = [...this.props.outfits]
    const currentOutfit = merged;
    let duplicate = false;
    yourOutfits.forEach(outfit => {
      if(JSON.stringify(outfit) === JSON.stringify(merged) ) {
        duplicate = true;
      }
    })
    if(!duplicate) {
      yourOutfits.unshift(currentOutfit);
      this.props.outfitUpdater(yourOutfits)
      sessionStorage.setItem('outfits', JSON.stringify(yourOutfits));
    }
  }
}

handleRemoveOutfit(styleID) {
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
  this.props.outfitUpdater(storedOutfits)
}
  render() {
    return (
      <div>
        <div className='related-main-container' data-testid="related-main-container">
          RELATED PRODUCTS
          <ProductCard selectNewProduct ={this.props.selectNewProduct} relatedArr={this.props.relatedArr} slideRight={this.slideRight} slideLeft={this.slideLeft} currProd ={this.props.currProd}/>
          YOUR OUTFITS
          <YourOutfit outfits={this.props.outfits} slideRight={this.slideRight} slideLeft={this.slideLeft} handleAddProduct={this.handleAddProduct} handleRemoveOutfit={this.handleRemoveOutfit}/>
        </div>
      </div>
    );
  }
}

export default RelatedItems;