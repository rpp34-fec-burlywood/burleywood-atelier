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

  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      //NOTE this is hardcoded
      //64626 = more than 4 products
      //64621 = less than 4
      this.props.initialize(64626);
    }
  }
  slideRight(id) {
    var num;
    id === 'related' ? num = 15 : num = 250
    var element = document.getElementById(`${id}-list`);
    const scrollLength = (element.offsetWidth + num) / 4
    element.scrollLeft += scrollLength;
    var $container=$(`#${id}-list`);
    var scrollLeftValue = $container.scrollLeft(),
        width=$container.width(),
        scrollWidth=$container.get(0).scrollWidth;
    var offset=264;
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
  id === 'related' ? num = 15 : num = 250;
  id === 'related' ? extraWidth = 0 : extraWidth = 230;
  var element = document.getElementById(`${id}-list`);
  const scrollLength = (element.offsetWidth + num) / 4
  element.scrollLeft -= scrollLength;
  var $container=$(`#${id}-list`);
  var scrollLeftValue = $container.scrollLeft(),
      width=$container.width(),
      scrollWidth=$container.get(0).scrollWidth;
  var offset=264;
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

  render() {
    return (
      <div>
        <div className='related-main-container'>
          RELATED PRODUCTS
          <ProductCard relatedArr={this.props.relatedArr} slideRight={this.slideRight} slideLeft={this.slideLeft}/>
          <YourOutfit num={this.props.relatedArr} slideRight={this.slideRight} slideLeft={this.slideLeft} />
        </div>
      </div>
    );
  }
}

export default RelatedItems;