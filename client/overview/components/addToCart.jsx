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
      quantity: 1,
      currSizeStock: null,
      sku_id: null,
      sizeDropdown: false,
      addPopUp: false,
      cartSucc: false,
      quantityDropdown: false
    }

    this.selectSizeHandler = this.selectSizeHandler.bind(this);
    this.selectQuanityHandler = this.selectQuanityHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.dropdownClickHandlerSize = this.dropdownClickHandlerSize.bind(this);
    this.addPopUp = this.addPopUp.bind(this);
    this.dropdownClickHandlerQty = this.dropdownClickHandlerQty.bind(this);
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

  selectQuanityHandler(quantity) {
    this.setState({
      quantity: quantity
    });
  }

  dropdownClickHandlerSize() {
    this.setState({
      sizeDropdown: !this.state.sizeDropdown
    })
  }

  dropdownClickHandlerQty() {
    if (this.state.currSize) {
      this.setState({
        quantityDropdown: !this.state.quantityDropdown
      })
    }
  }

  addToCartHandler(e) {
    e.preventDefault();
    this.props.addToCart(this.state, () => {
      this.setState({
        cartSucc: true
      })

      setTimeout(() => {
        this.setState({
          cartSucc: false
        })
      }, 2000)
    });
  }

  addPopUp() {
    this.setState({
      sizeDropdown: true,
      addPopUp: true
    })

    setTimeout(() => {
      this.setState({
        addPopUp: false
      })
    }, 2000)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStyle !== this.props.selectedStyle) {
      this.setState({
        currSize: null,
        quantity: 1,
        currSizeStock: null,
        sku_id: null,
        sizeDropdown: false,
        addPopUp: false,
        cartSucc: false,
        quantityDropdown: false
      })
    }
  }

  render() {
    if (this.props.selectedStyle) {
      return (
        <div id="addToCart">
          <SizeSelect
            skus={this.props.selectedStyle.skus}
            selectSizeHandler={this.selectSizeHandler}
            currSize={this.state.currSize}
            active={this.state.sizeDropdown}
            dropdownClickHandler={this.dropdownClickHandlerSize}
            addPopUp={this.state.addPopUp} />
          <QuantitySelect
            skus={this.props.selectedStyle.skus}
            currSize={this.state.currSize}
            quantity={this.state.quantity}
            currSizeStock={this.state.currSizeStock}
            selectQuanityHandler={this.selectQuanityHandler}
            active={this.state.quantityDropdown}
            dropdownClickHandler={this.dropdownClickHandlerQty} />
          {
            this.state.sku_id ?
              <button id="addCartBTN" onClick={this.addToCartHandler}>
                <div>{`${this.state.cartSucc ? 'SUCCESS!': 'ADD TO CART'}`}</div>
                </button>
              : <button id="invalidAddBTN" onClick={this.addPopUp}>ADD TO CART</button>
          }
          <button id="addStyleBTN" title="Add to Outfits" onClick={this.props.handleAddProduct}>&#10133;</button>
        </div>
      );
    }
    return <div id="addToCart"></div>
  }
}

export default AddToCart;