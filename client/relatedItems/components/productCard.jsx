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
      <div className="related-container">
            <button className="arrow" id="left-related" onClick={()=>this.props.slideLeft('related')}>&#10092;</button>
            <RightButton len ={this.props.relatedArr.length} buttonID={'related'} slideRight={this.props.slideRight}/>
          <div id="related-list">
              {this.props.relatedArr.map((product) => (
                <Card key={product.value.id + product.value.name} product={product.value} type={'related'} currProd ={this.props.currProd} selectNewProduct = {this.props.selectNewProduct}/>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;