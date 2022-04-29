/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './components/gallery.jsx';
import ProductInfo from './components/productInfo.jsx';
import StyleSelector from './components/styleSelector.jsx';
import AddToCart from './components/addToCart.jsx';
import ProductDescription from './components/productDescription.jsx';
import './components/overview.css'

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('RENDERED Overview');
    return (
      <div id="overview">
        <div className="overviewTop">
          <div className="overviewLeft">
            <Gallery
              selectedStyle={this.props.selectedStyle}
              currProdStyles={this.props.currProdStyles}
              mainImageIndex={this.props.mainImageIndex}
              carouselClickhandler={this.props.carouselClickhandler}
              arrowXClickHandler={this.props.arrowXClickHandler} />
          </div>
          <div className="overviewRight">
            <ProductInfo
              reviews={this.props.reviews}
              productInfo={this.props.currProd}
              selectedStyle={this.props.selectedStyle}
            />
            <div className="optionCheckout">
              <StyleSelector
                selectedStyle={this.props.selectedStyle}
                currProdStyles={this.props.currProdStyles}
                defaultStyle={this.props.defaultStyle}
                mainImageIndex={this.props.mainImageIndex}
                styleClickHandler={this.props.styleClickHandler} />
              <AddToCart
                selectedStyle={this.props.selectedStyle}
                addToCart={this.props.addToCart}
                handleAddProduct={this.props.handleAddProduct} />
            </div>
          </div>
        </div>
        <div className="overviewBottom">
          <ProductDescription productInfo={this.props.currProd}/>
        </div>
      </div>
    );
  }

}

export default Overview;