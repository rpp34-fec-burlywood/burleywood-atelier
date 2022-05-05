/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card.jsx';
import {VscAdd} from 'react-icons/vsc';
import RightButton from './rightButton.jsx';
const YourOutfit = (props) => {
  return (
    <div className='your-outfits-container' data-testid="outfit-container">
      <div id ="outfit-add" data-testid="outfit-add" onClick ={()=>props.handleAddProduct()} >
        <div id="child">
          <p>Add to Outfit</p>
          <VscAdd size={60} id='add-icon'/>
        </div>
      </div>
        <button className="arrow" id="left-outfit" onClick={()=>props.slideLeft('outfit')}>&#10092;</button>
        <RightButton len ={props.outfits.length} buttonID={'outfit'} slideRight={props.slideRight}/>
        <div id="outfit-list">
            {props.outfits.map((product) => (
                <Card key={product.value.styles.style_id + product.value.name} product={product.value} type ={'outfit'} handleRemoveOutfit={props.handleRemoveOutfit} rating={product.rating} selectNewProduct = {props.selectNewProduct}/>
            ))}
        </div>
    </div>
  )
}
export default YourOutfit;