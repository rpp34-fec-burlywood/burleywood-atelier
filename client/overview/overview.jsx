/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './components/gallery.jsx';
import ProductInfo from './components/productInfo.jsx';
import StyleSelector from './components/styleSelector.jsx';
import AddToCart from './components/addToCart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImageIndex: 0
    }

    this.carouselClickhandler = this.carouselClickhandler.bind(this);
  }

  carouselClickhandler (e){
    e.preventDefault();

    var index = Number(e.target.attributes.index?.value);
    if (index !== this.state.mainImageIndex) {
      this.setState({
        mainImageIndex: index
      });
    }
  }

  render() {
    return (
      <div id="overview">
        <div className="overviewLeft">
          <Gallery
            selectedStyle={this.props.selectedStyle}
            currProdStyles={this.props.currProdStyles}
            mainImageIndex={this.state.mainImageIndex}
            carouselClickhandler={this.carouselClickhandler} />
        </div>
        <div className="overviewRight">
          <ProductInfo
            productInfo={this.props.currProd}
            selectedStyle={this.props.selectedStyle}
             />
          <div>
            <StyleSelector
              selectedStyle={this.props.selectedStyle}
              currProdStyles={this.props.currProdStyles}/>
            <AddToCart
              selectedStyle={this.props.selectedStyle}
              addToCart={this.props.addToCart} />
          </div>
        </div>
      </div>
    );
  }

}

export default Overview;