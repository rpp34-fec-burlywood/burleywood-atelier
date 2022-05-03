/* eslint-disable react/prop-types */
import React from 'react';

class QuantitySelect extends React.Component {
  constructor(props) {
    super(props);

    this.renderQuantity = this.renderQuantity.bind(this);
  }

  renderQuantity(currSize, currSizeStock) {
    if (currSize && currSizeStock) {
      var quantityList = [];
      const limit = 15;
      var cap = Math.min(limit, currSizeStock)
      for (let i = 1; i <= cap; i++) {
        quantityList.push(<option value={i} key={i}>{i}</option>);
      }
      return quantityList;
    } else {
      return <option value="0">0</option>
    }
  }

  componentDidMount(){
    var e = {
      target: { value : 1},
      preventDefault: function (){}
    }
    this.props.selectQuanityHandler(e);
  }

  render() {
    return (
      <div id="quantitySelect">
        <select onChange={this.props.selectQuanityHandler}>
          <option value="">-QTY-</option>
          {this.renderQuantity(this.props.currSize, this.props.currSizeStock)}
        </select>
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