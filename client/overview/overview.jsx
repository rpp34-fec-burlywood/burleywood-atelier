/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './components/gallery.jsx';
import ProductInfo from './components/productInfo.jsx';
import StyleSelector from './components/styleSelector.jsx';
import AddToCart from './components/addToCart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div id="overview">
        <div className="overviewLeft">
          <Gallery
            selectedStyle={this.props.selectedStyle}
            currProdStyles={this.props.currProdStyles} />
        </div>
        <div className="rightOverRight">
          <ProductInfo
            productInfo={this.props.currProd}
            selectedStyle={this.props.selectedStyle}
             />
          <div>
            <StyleSelector
              selectedStyle={this.props.selectedStyle}
              currProdStyles={this.props.currProdStyles}/>
            <AddToCart />
          </div>
        </div>
      </div>
    );
  }

}

export default Overview;