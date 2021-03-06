/* eslint-disable react/prop-types */
import React from 'react';
import Stars from '../../stars.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      average: 0,
    }

    this.renderReview = this.renderReview.bind(this);
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

  renderReview() {
    var average = 0;
    var numReview = 0;
    let reviewSum = 0;

    for (let i = 1; i <= 5; i++) {
      let count = Number(this.props.reviews[i]);
      reviewSum += count * i;
      numReview += count;
    }
    average = reviewSum / numReview;
    average = average.toFixed(2);

    this.setState({
      average,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews !== this.props.reviews) {
      this.renderReview();
    }
  }

  render() {
    if (this.props.productInfo && this.props.selectedStyle) {
      return (
        <div id="productInfo">
          <a id="jump2Review" href="#reviews">
            <span id='currProdRating'><Stars stars={this.state.average} /></span>
            {`Read All ${this.props.numReviews} Reviews`}</a>
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