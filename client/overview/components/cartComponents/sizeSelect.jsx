/* eslint-disable react/prop-types */
import React from 'react';

class SizeSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.handlerBundle = this.handlerBundle.bind(this);
    this.renderSkus = this.renderSkus.bind(this);
    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
  }

  renderSkus(skuObj) {
    var sizeList = [];
    for (let skuNum in skuObj) {
      let stock = skuObj[skuNum].quantity;
      let value = skuObj[skuNum].size;
      sizeList.push(
        <div className="dropdownItem"
          id={skuNum}
          key={skuNum}
          stock={stock}
          value={value}>
            {`${value}`}
        </div>
      )
    }
    return sizeList;
  }

  handlerBundle(e) {
    e.preventDefault();
    console.log(e.target)
    // this.props.selectSizeHandler(e);
    // this.props.stockHandler(e)
  }

  dropdownClickHandler(e) {
    e.preventDefault();
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div id="sizeSelect">
        <div className="dropdown" onClick={this.dropdownClickHandler}>
          <div>{this.props.currSize ? `${this.props.currSize}` : "Select Size"}</div>
        </div>
        <div className={`dropdownMenu ${this.state.active ? 'active': ""}`}>
          {this.renderSkus(this.props.skus)}
        </div>
      </div>
    );
  }

}

export default SizeSelect;