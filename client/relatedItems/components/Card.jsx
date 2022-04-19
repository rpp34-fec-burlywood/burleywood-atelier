/* eslint-disable react/prop-types */
import React from 'react';
import Price from './price.jsx';
import './related.css';
import DeleteButton from './deleteButton.jsx';
import CompareButton from './compareButton.jsx';


const Card = (props)=> {
  const {product} = props;
  console.log(product)
  const{original_price, sale_price, photos}  = product.styles
  const img = photos[0].thumbnail_url || `https://source.unsplash.com/random/300×194/?${product.category}`
  if (props.type === 'outfit') {
    return (
      <div className = "card">
        <DeleteButton id={product.id} handleRemove = {props.handleRemoveOutfit}/>
        <img className ="img" src ={img}  width='230' height='194'/>
        <p className='card-category'>{product.category}</p>
        <p className="card-price">{product.name}</p>
        <Price sale ={sale_price} original = {original_price}/>
      </div>
    )
  }
  if(props.type === 'related') {
    return (
        //todo CSS
      <div className = "card">
        <CompareButton />
        <img className ="img" src ={img}  width='230' height='194'/>
        <p className='card-category'>{product.category}</p>
        <p className="card-price">{product.name}</p>
        <Price sale ={sale_price} original = {original_price}/>
      </div>
    )
  }
}

export default Card;