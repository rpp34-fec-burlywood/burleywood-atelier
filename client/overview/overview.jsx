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
        <div className="leftOverview">
          <Gallery />
        </div>
        <div className="rightOverview">
          <ProductInfo />
          <div>
            <StyleSelector />
            <AddToCart />
          </div>
        </div>
      </div>
    );
  }

}

export default Overview;