/* eslint-disable react/prop-types */
import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);


  }

  renderPrice(selectedStyle) {

    if (selectedStyle.sale_price) {
      return (
        <div id="currStylePrice">
          <div className="originalPrice">{`$${this.props.selectedStyle.original_price}`}</div>
          <div id="checkoutPrice" className="$sale">{`$${this.props.selectedStyle.sale_price}`}</div>
        </div>
      );
    }
    return (
      <div className="currStylePrice">
        <div id="checkoutPrice">{`$${this.props.selectedStyle.original_price}`}</div>
      </div>
    );
  }

  render() {
    if (this.props.productInfo && this.props.selectedStyle) {
      return (
        <div id="productInfo">
          <div>{this.props.productInfo.category}</div>
          <div className="currProductTitle">{this.props.productInfo.name}</div>
          {this.renderPrice(this.props.selectedStyle)}
          <div>{this.props.productInfo.slogan ? this.props.productInfo.slogan: null}</div>
          <div>{this.props.productInfo.description ? this.props.productInfo.description: null}</div>
        </div>
      );
    }
    return <div id="productInfo"></div>
  }

}

export default ProductInfo;