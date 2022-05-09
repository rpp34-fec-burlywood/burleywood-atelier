/* eslint-disable react/prop-types */
import React from 'react';

const Price = (props) => {

  if (!props.sale) {
    return (
      <div className='card-price'>
        <span>{`$${props.original}`}</span>
      </div>
    )
  } else {
    return (
      <div className='card-price'>
        <span id='sale'>{`$${props.sale} `}</span>
        <span id='original_price'>{` $${props.original}`}</span>
      </div>
    )
  }
}

export default Price