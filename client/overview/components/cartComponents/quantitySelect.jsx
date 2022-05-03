/* eslint-disable react/prop-types */
import React from 'react';

class QuantitySelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
    this.handlerBundle = this.handlerBundle.bind(this);
    this.renderQuantity = this.renderQuantity.bind(this);
    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
  }

  renderQuantity(currSize, currSizeStock) {
    if (currSize && currSizeStock) {
      var quantityList = [];
      const limit = 15;
      var cap = Math.min(limit, currSizeStock)
      for (let i = 1; i <= cap; i++) {
        quantityList.push(
          <div className='dropdownItem'
            value={i}
            key={i}>
            {i}
          </div>
        );
      }
      return quantityList;
    } else {
      return [];
    }
  }

  // componentDidMount() {
  //   var e = {
  //     target: { value: 1 },
  //     preventDefault: function () { }
  //   }
  //   this.props.selectQuanityHandler(e);
  // }

  dropdownClickHandler() {
    if (this.props.currSize)
    this.setState({
      active: !this.state.active
    })
  }

  handlerBundle(e) {
    e.preventDefault();
    console.log(e.target.attributes.value?.value)
    let quantity = e.target.attributes.value?.value;
    if (quantity){
      this.props.selectQuanityHandler(quantity);
      this.dropdownClickHandler();
    }
  }



render() {
  return (
    <div id="quantitySelect">
      <div className="dropdown" onClick={this.dropdownClickHandler}>
        <span style={{ paddingleft: '10px', width: '11px' }}></span>
        <div>{this.props.currSize ? `${this.props.quantity}` : "-"}</div>
        <span style={{ paddingRight: '6px' }}>&#9663;</span>
      </div>
      <div className={`dropdownMenu ${this.state.active ? 'active' : ""}`} onClick={this.handlerBundle}>
        {this.renderQuantity(this.props.currSize, this.props.currSizeStock)}
      </div>
    </div>
  );
}

}

export default QuantitySelect;

{/* <div id="quantitySelect">
  <select onChange={this.props.selectQuanityHandler}>
    <option value="">-QTY-</option>
    {this.renderQuantity(this.props.currSize, this.props.currSizeStock)}
  </select>
</div> */}