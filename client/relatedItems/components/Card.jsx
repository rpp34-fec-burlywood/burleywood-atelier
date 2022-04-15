/* eslint-disable react/prop-types */
import React from 'react';
import Price from './price.jsx';
import './related.css';


const Card = (props)=> {

  const {product} = props;
  const{original_price, sale_price, photos}  = product.styles
  const img = photos[0].thumbnail_url || `https://source.unsplash.com/random/300×194/?${product.category}`
  return(
            <div className="card-container" >
              <img className ="img" src ={img}  width='230' height='194'/>
              <p className="card-price">{product.name}</p>
              <Price sale ={sale_price} original = {original_price}/>
          </div>
  )
}

export default Card;