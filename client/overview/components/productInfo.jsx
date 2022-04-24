/* eslint-disable react/prop-types */
import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);


  }

  renderPrice(selectedStyle) {

    if (selectedStyle.sale_price) {
      return (
        <div className="currStylePrice">
          <div>PRICE:</div>
          <div className="originalPrice sale">{`$${this.props.selectedStyle.original_price}`}</div>
          <div id="checkoutPrice" className="salesPrice">{`$${this.props.selectedStyle.sale_price}`}</div>
        </div>
      );
    }
    return (
      <div className="currStylePrice">
        <div>PRICE:</div>
        <div id="checkoutPrice" className="originalPrice">{`$${this.props.selectedStyle.original_price}`}</div>
      </div>
    );
  }

  render() {
    if (this.props.productInfo && this.props.selectedStyle) {
      return (
        <div id="productInfo">
          <div className="productCategory">{`Category: ${this.props.productInfo.category}`}</div>
          <div className="currProductTitle">{this.props.productInfo.name}</div>
          {this.renderPrice(this.props.selectedStyle)}
        </div>
      );
    }
    return <div id="productInfo"></div>
  }

}

export default ProductInfo;