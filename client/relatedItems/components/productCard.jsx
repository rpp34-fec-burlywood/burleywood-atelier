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
            <Card key={product.value.id + product.value.name} product={product.value} />
          ))}
        </div>
      </div>
    );
  }

}

export default ProductCard;