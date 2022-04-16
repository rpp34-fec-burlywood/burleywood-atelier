/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card.jsx';
import $ from 'jquery';
import RightButton from './rightButton.jsx';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div className='your-outfits-container'>
          <div id ="outfit-add" >
            <p>Add to Outfit</p>
          </div>
          <button id="left-outfit" onClick={()=>this.props.slideLeft('outfit')}>left</button>
          <RightButton len ={this.props.num.length} buttonID={'outfit'} slideRight={this.props.slideRight}/>
          <div id="outfit-list">
                  {this.props.num.map((product) => (
                 <Card key={product.value.id + product.value.name} product={product.value} type ={'outfit'}/>
               ))}
          </div>
      </div>

    );
  }

}

export default YourOutfit;