/* eslint-disable react/prop-types */
import React from 'react';
import './related.css';

class Card extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {product} = this.props;
    const{original_price, sale_price, photos}  = product.styles.results[0]
    return(
      <div className='card-container'>
        <div>{product.name}</div>
        <div>{original_price}</div>
        <img src ={photos[0].thumbnail_url}  width='220' height='194'/>
      </div>
    );
  }
}

export default Card;