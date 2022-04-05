import React from 'react';
import ProductCard from './components/productCard';
import YourOutfit from './components/yourOutfit';


class RelatedItems extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>
        <div className='related-items-container'>
          RELATED PRODUCTS
          <ProductCard/>
        </div>
        <div className='your-outfit-container'>
          YOUR OUTFIT
          <YourOutfit/>
        </div>
      </div>
    );
  }

}

export default RelatedItems;