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
    var element = document.getElementById(`${id}`);
    const scrollLength = (element.offsetWidth + 25) / 4
    element.scrollLeft += scrollLength;
    var $container=$(`#${id}`);
    var scrollLeftValue = $container.scrollLeft(),
        width=$container.width(),
        scrollWidth=$container.get(0).scrollWidth;
    var offset=264;
    if (scrollWidth - scrollLeftValue - width <= offset) {
     {
         $(`#right-${id}`).hide()
         $(`#left-${id}`).show()
    }
   }
 }

 slideLeft (id){
  var element = document.getElementById(`${id}`);
  const scrollLength = (element.offsetWidth + 15) / 4
  element.scrollLeft -= scrollLength;
  var $container=$(`#${id}`);
  var scrollLeftValue = $container.scrollLeft(),
      width=$container.width(),
      scrollWidth=$container.get(0).scrollWidth;
  var offset=264;
  if (offset + scrollLeftValue + width <= scrollWidth) {
   {
       $(`#right-${id}`).show()
       $(`#left-${id}`).hide()
  }
 }
}

  render() {
    return (
      <div>
        <div className='related-items-container'>
          RELATED PRODUCTS
          {/* {console.log(this.props.relatedArr)} */}
          <ProductCard relatedArr={this.props.relatedArr} slideRight={this.slideRight} slideLeft={this.slideLeft}/>
          YOUR OUTFIT
          {/* <YourOutfit num={[]} /> */}
        </div>
      </div>
    );
  }

}

export default RelatedItems;