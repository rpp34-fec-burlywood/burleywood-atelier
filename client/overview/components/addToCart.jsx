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
    this.stockHandler = this.stockHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  // NEED Way to handle Edge case of Null SKU, (infinity Stone)

  selectSizeHandler(e) {
    e.preventDefault();
    var index = e.target.selectedIndex;
    var sku_id = e.target[index].attributes.id.value;
    this.setState({
      currSize: e.target.value,
      sku_id: sku_id
    });
  }

  selectQuanityHandler(e) {
    e.preventDefault();
    this.setState({
      quantity: e.target.value
    });
  }

  stockHandler(e) {
    e.preventDefault();
    var index = e.target.selectedIndex;
    var stock = e.target[index].attributes.stock?.value ? e.target[index].attributes.stock.value: 1;
    this.setState({
      currSizeStock: Number(stock)
    });
  }

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
            stockHandler = {this.stockHandler} />
          <QuantitySelect
            skus={this.props.selectedStyle.skus}
            currSize={this.state.currSize}
            currSizeStock={this.state.currSizeStock}
            selectQuanityHandler={this.selectQuanityHandler} />
           <button onClick={this.addToCartHandler}>Add To Cart</button>
        </div>
      );
    }
    return <div id="addToCart"></div>
  }
}

export default AddToCart;