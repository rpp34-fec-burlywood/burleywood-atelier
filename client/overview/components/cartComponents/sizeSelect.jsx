/* eslint-disable react/prop-types */
import React from 'react';

class SizeSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handlerBundle = this.handlerBundle.bind(this);
    this.renderSkus = this.renderSkus.bind(this);
  }

  renderSkus(skuObj) {
    var sizeList = [];
    for (let skuNum in skuObj) {
      let stock = skuObj[skuNum].quantity;
      let value = skuObj[skuNum].size;
      sizeList.push(
        <option
          id={skuNum}
          key={skuNum}
          stock={stock}
          value={value}>
            {`${value}`}
        </option>
      )
    }
    return sizeList;
  }

  handlerBundle(e) {
    e.preventDefault();
    this.props.selectSizeHandler(e);
    this.props.stockHandler(e)
  }

  render() {
    return (
      <div>
        <select id="sizeSelect" onChange={this.handlerBundle}>
          <option value="">--SELECT SIZE--</option>
          {this.renderSkus(this.props.skus)}
        </select>
      </div>
    );
  }

}

export default SizeSelect;