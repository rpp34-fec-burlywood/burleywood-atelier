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
      this.props.initialize(64626);
      let outfits = JSON.parse(sessionStorage.getItem('outfits')) || [];
      this.setState({outfits: outfits})
    }
  }
  slideRight(id) {
    var num;
    id === 'related' ? num = 0 : num = 242
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
  var num, extraWidth;
  id === 'related' ? num = 0 : num = 242;
  id === 'related' ? extraWidth = 0 : extraWidth = 242;
  var element = document.getElementById(`${id}-list`);
  const scrollLength = (element.offsetWidth + num) / 4
  element.scrollLeft -= scrollLength;
  var $container=$(`#${id}-list`);
  var scrollLeftValue = $container.scrollLeft(),
      width=$container.width(),
      scrollWidth=$container.get(0).scrollWidth;
  var offset=278;
    if (offset + scrollLeftValue + width + extraWidth <= scrollWidth) {
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
  merged.value.styles = {...this.props.selectedStyle}
  // if your outfits is empty
  if(!sessionStorage.getItem('outfits')) {
    storage.push(merged);
    sessionStorage.setItem('outfits', JSON.stringify(storage));
    this.setState({outfits: storage})
  } else {
    //else check for duplicate
    // console.log('====merged===')
    // console.log(merged)
    // console.log('====currentProdID===')
    // console.log(this.props.currProd.id)

  //   var yourOutfits = this.state.outfits;
  //   console.log(this.state.outfits)


  // })
    // yourOutfits.forEach(outfit => {
    //   if(outfit.value.id !== this.props.currProd.id) {
    //       console.log('====outfitID===')
    //       console.log(outfit.value.id)
    //       console.log('====currentProdID===')
    //       console.log(this.props.currProd.id)
    //       yourOutfits.unshift(merged)
    //       sessionStorage.setItem('outfits', JSON.stringify(yourOutfits));
    //       this.setState({outfits: yourOutfits});
    //     }
    // })
  }
}

handleRemoveOutfit(productID) {
  let storedOutfits = JSON.parse(sessionStorage.getItem('outfits'));
  let index = storedOutfits.findIndex((outfit) => {
    outfit.value.id === productID
  })
  storedOutfits.splice(index, 1);
  sessionStorage.setItem('outfits', JSON.stringify(storedOutfits));
  this.setState({outfits: storedOutfits})
}
  render() {
    return (
      <div>
        <div className='related-main-container'>
          RELATED PRODUCTS
          <ProductCard relatedArr={this.props.relatedArr} slideRight={this.slideRight} slideLeft={this.slideLeft}/>
          YOUR OUTFITS
          <YourOutfit num={this.state.outfits} slideRight={this.slideRight} slideLeft={this.slideLeft} handleAddProduct={this.handleAddProduct} handleRemoveOutfit={this.handleRemoveOutfit}/>
        </div>
      </div>
    );
  }
}

export default RelatedItems;