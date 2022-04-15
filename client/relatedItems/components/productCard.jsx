/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card.jsx';
import RightButton from './rightButton.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
      <div id="related-container">
        <button id="left-products" onClick={()=>this.props.slideLeft('products')}>left</button>
          <div id ="products">
            {this.props.relatedArr.map((product) => (
              <Card key={product.value.id + product.value.name} product={product.value} />
            ))}
            </div>
              <RightButton len ={this.props.relatedArr.length} buttonID={'products'} slideRight={this.props.slideRight}/>
        </div>
      </div>
    );
  }
}

export default ProductCard;