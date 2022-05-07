/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card.jsx';
import RightButton from './rightButton.jsx';
const YourOutfit = (props) => {
  // console.log(props)
  return (
    <div className='your-outfits-container' data-testid="outfit-container">
      <div id ="outfit-add" data-testid="outfit-add" onClick ={()=>props.handleAddProduct()} >
        <p >Add to Outfit</p>
      </div>
        <button className="arrow" id="left-outfit" onClick={()=>props.slideLeft('outfit')}>&#706;</button>
        <RightButton len ={props.outfits.length} buttonID={'outfit'} slideRight={props.slideRight}/>
        <div id="outfit-list">
            {props.outfits.map((product, index) => (
                <Card key={product.value.styles.style_id + product.value.name} product={product.value} type ={'outfit'} handleRemoveOutfit={props.handleRemoveOutfit}/>
            ))}
        </div>
    </div>
  )
}
export default YourOutfit;