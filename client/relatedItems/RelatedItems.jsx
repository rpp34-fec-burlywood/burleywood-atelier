/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './components/productCard.jsx';
import YourOutfit from './components/yourOutfit.jsx';
class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <div className='related-items-container'>
          RELATED PRODUCTS
          {console.log(this.props.relatedArr)}
          <ProductCard relatedArr={this.props.relatedArr}/>
          YOUR OUTFIT
          <YourOutfit num={[1,2,3]}/>
        </div>
      </div>
    );
  }

}

export default RelatedItems;