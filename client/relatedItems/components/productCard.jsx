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
          {this.props.num.map((n,i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    );
  }

}

export default ProductCard;