/* eslint-disable react/prop-types */
import React from 'react';
import Price from './price.jsx';
import './related.css';
import DeleteButton from './deleteButton.jsx';
import CompareButton from './comapreModal/compareButton.jsx';
import Stars from '../../stars.jsx';



const Card = (props)=> {
  const {product} = props;
  const{original_price, sale_price, photos}  = product.styles
  const img = photos[0].thumbnail_url || `https://source.unsplash.com/random/206×194/?${product.category}`
  if (props.type === 'outfit') {
    return (
      <div className = "card" onClick={()=>props.selectNewProduct(props.product.id)}>
        <DeleteButton id={product.styles.style_id} handleRemove = {props.handleRemoveOutfit}/>
        <img className ="img" src ={img}  width='212' height='194'/>
        <p className='card-category'>{product.category}</p>
        <p className="card-name">{product.name}</p>
        {<Stars stars={product.rating || 0} /> }
        <Price sale ={sale_price} original = {original_price}/>
      </div>
    )
  }
  if(props.type === 'related') {
    return (
      <div className = "card" onClick={()=>props.selectNewProduct(props.product.id)}>
        <CompareButton leftName={props.currProd.name} currProd={props.currProd.features} selectedProd={props.product.features} rightName={props.product.name}/>
        <img className ="img" src ={img}  width='212' height='194'/>
        <p className='card-category'>{product.category}</p>
        <p className="card-name">{product.styles.name +' '+product.name}</p>
        {<Stars stars={product.rating || 0} /> }
        <Price sale ={sale_price} original = {original_price}/>
      </div>
    )
  }
}

export default Card;