/* eslint-disable react/prop-types */
import React from 'react';
import SizeSelect from './cartComponents/sizeSelect.jsx';
import QuantitySelect from './cartComponents/quantitySelect.jsx'


class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    //selected current state
    this.state = {
      currSize: null,
      quantity: 0,
      currSizeStock: null,
      sku_id: null
    }

    this.selectSizeHandler = this.selectSizeHandler.bind(this);
    this.selectQuanityHandler = this.selectQuanityHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  // NEED Way to handle Edge case of Null SKU, (infinity Stone)

  selectSizeHandler(sku_id) {
    if (sku_id !== undefined) {
      // console.log(this.props.selectedStyle.skus[sku_id].size)
      this.setState({
        currSize: this.props.selectedStyle.skus[sku_id].size,
        sku_id: sku_id,
        currSizeStock: this.props.selectedStyle.skus[sku_id].quantity,
      });
    }
  }

  selectQuanityHandler(e) {
    e.preventDefault();
    this.setState({
      quantity: e.target.value
    });
  }

    // STOCK QUANTITY SHOULD BE HANDELED at the prop level here in this COMPONENT
    // not at the selector target...., unless it's in an array that I would have to search.... Hmmm


  addToCartHandler(e) {
    e.preventDefault();
    this.props.addToCart(this.state);
  }

  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="addToCart">
          <SizeSelect
            skus={this.props.selectedStyle.skus}
            selectSizeHandler={this.selectSizeHandler}
            currSize={this.state.currSize} />
          <QuantitySelect
            skus={this.props.selectedStyle.skus}
            currSize={this.state.currSize}
            currSizeStock={this.state.currSizeStock}
            selectQuanityHandler={this.selectQuanityHandler} />
           <button id="addCartBTN" onClick={this.addToCartHandler}>ADD TO CART</button>
           <button id="addStyleBTN" title="Add to Outfits" onClick={this.props.handleAddProduct}>&#10133;</button>
        </div>
      );
    }
    return <div id="addToCart"></div>
  }
}

export default AddToCart;