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
      let inStock = skuObj[skuNum].quantity > 0 ? '': 'outOfStock';
      let size = skuObj[skuNum].size;
      let item;
      if (inStock === 'outOfStock') {
        item = <div className='dropdownItem outOfStock'
                  sku_id={skuNum}
                  key={skuNum}
                  value={null}>
                    Out of Stock
                </div>
      } else {
        item = <div className='dropdownItem'
                  sku_id={skuNum}
                  key={skuNum}
                  value={size}>
                    {`${size}`}
                </div>
      }
      sizeList.push(item);
    }
    return sizeList;
  }

  handlerBundle(e) {
    e.preventDefault();
    let sku_id = e.target.attributes.sku_id?.value;
    let size = e.target.attributes.value?.value
    if (size !== undefined || size !== null){
      this.props.selectSizeHandler(sku_id);
      this.dropdownClickHandler();
    }
  }

  dropdownClickHandler() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div id="sizeSelect">
        <div className="dropdown" onClick={this.dropdownClickHandler}>
          <span style={{paddingleft: '10px', width: '11px'}}></span>
          <div>{this.props.currSize ? `${this.props.currSize}` : "Select Size"}</div>
          <span style={{paddingRight: '6px'}}>&#9663;</span>
        </div>
        <div className={`dropdownMenu ${this.state.active ? 'active': ""}`}  onClick={this.handlerBundle}>
          {this.renderSkus(this.props.skus)}
        </div>
      </div>
    );
  }

}

export default SizeSelect;