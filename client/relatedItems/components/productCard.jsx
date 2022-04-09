/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div className='related-items-container'>
          {this.props.relatedArr.map((product,i) => (
            <Card key={product.id + i} product={product} />
          ))}
        </div>
      </div>
    );
  }

}

export default ProductCard;