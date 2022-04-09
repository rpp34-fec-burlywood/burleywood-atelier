/* eslint-disable react/prop-types */
import React from 'react';
import './related.css';

class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='box'>
        {console.log(this.props.product)}
        <div>{this.props.product.name}</div>
        <div>{this.props.product.original_price}</div>
        <img src ={this.props.product.photos[0].thumbnail_url}  width='220' height='194'/>
      </div>
    );
  }
}

export default Card;