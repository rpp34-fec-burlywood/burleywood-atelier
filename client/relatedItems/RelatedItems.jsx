/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './components/productCard.jsx';
import YourOutfit from './components/yourOutfit.jsx';
import $ from 'jquery';
class RelatedItems extends React.Component {
  constructor(props) {

    super(props);
    this.slideRight = this.slideRight.bind(this)
    this.slideLeft = this.slideLeft.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveOutfit = this.handleRemoveOutfit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.initialize(this.props.currProd.id);
    }
  }
  slideRight(id) {
    var num;
    id === 'related' ? num = 0 : num = 226;
    var element = document.getElementById(`${id}-list`);
    const scrollLength = (element.offsetWidth + num) / 4
    element.scrollLeft += scrollLength;
    var $container=$(`#${id}-list`);
    var scrollLeftValue = $container.scrollLeft(),
        width=$container.width(),
        scrollWidth=$container.get(0).scrollWidth;
    var offset=278;
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
  var num;
  id === 'related' ? num = 0 : num = 226;
  var element = document.getElementById(`${id}-list`);
  const scrollLength = (element.offsetWidth + num) / 4
  element.scrollLeft -= scrollLength;
  var $container=$(`#${id}-list`);
  var scrollLeftValue = $container.scrollLeft();
  if (  scrollLeftValue <= 230) {
    {
      $(`#right-${id}`).show()
      $(`#left-${id}`).hide()
    }
   } else {
    $(`#right-${id}`).show()
    $(`#left-${id}`).show()
   }
}

handleRemoveOutfit(styleID, e) {
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
  this.props.outfitUpdater(storedOutfits)
}
  render() {
    return (
      <div>
        <div className='related-main-container' data-testid="related-main-container">
          <p className='related-titles'>RELATED PRODUCTS</p>
          <ProductCard selectNewProduct ={this.props.selectNewProduct} relatedArr={this.props.relatedArr} slideRight={this.slideRight} slideLeft={this.slideLeft} currProd ={this.props.currProd}/>
          <p className='related-titles'>YOUR OUTFITS</p>
          <YourOutfit selectNewProduct ={this.props.selectNewProduct}  outfits={this.props.outfits} slideRight={this.slideRight} slideLeft={this.slideLeft} handleAddProduct={this.props.handleAddProduct} handleRemoveOutfit={this.handleRemoveOutfit} />
        </div>
      </div>
    );
  }
}

export default RelatedItems;