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
        //todo CSS
      <div className='card-price'>
        <span className='sale'>{`$${props.sale} `}</span>
        <span className='original_price'>{` $${props.original}`}</span>
      </div>
    )
  }
}

export default Price