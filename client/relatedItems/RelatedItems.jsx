/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './components/productCard.jsx';
import YourOutfit from './components/yourOutfit.jsx';
class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.initialize(this.props.currProd.id);
    }
  }

  render() {
    return (
      <div>
        <div className='related-items-container'>
          RELATED PRODUCTS
          <ProductCard relatedArr={this.props.relatedArr} />
          YOUR OUTFIT
          <YourOutfit num={[1, 2, 3]} />
        </div>
      </div>
    );
  }

}

export default RelatedItems;