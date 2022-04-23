/* eslint-disable react/prop-types */
import React from 'react';

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    if(this.props.productInfo) {
      return (
        <div className="productDescription">
          <div>{this.props.productInfo.slogan ? this.props.productInfo.slogan : null}</div>
          <div>{this.props.productInfo.description ? this.props.productInfo.description : null}</div>
        </div>
      )
    }
  }
}

export default ProductDescription;