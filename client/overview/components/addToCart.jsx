/* eslint-disable react/prop-types */
import React from 'react';
import SizeSelect from './cartComponents/sizeSelect.jsx';
import QuantitySelect from './cartComponents/quantitySelect.jsx'
import AddToCartBtn from './cartComponents/addToCartBtn.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    //selected current state
    this.state = {
      currSize: null,
      quantity: 0,
      currSizeStock: null
    }

    this.selectSizeHandler = this.selectSizeHandler.bind(this);
    this.selectQuanityHandler = this.selectQuanityHandler.bind(this);
    this.stockHandler = this.stockHandler.bind(this);
  }

  // NEED Way to handle Edge case of Null SKU, (infinity Stone)

  selectSizeHandler(e) {
    e.preventDefault();
    this.setState({
      currSize: e.target.value
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
    var stock = e.target[index].attributes.stock.value;
    this.setState({
      currSizeStock: Number(stock)
    });
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
          <AddToCartBtn />
        </div>
      );
    }
    return <div id="addToCart"></div>
  }
}

export default AddToCart;