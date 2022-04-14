import React from 'react';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import ReviewsWidget from './reviews/reviewsWidget.jsx';
import overviewHandler from './utils/overviewUtils.js';
import relatedHandlers  from './utils/relatedItemsUtils.js';
import reviewHandlers from './utils/reviewUtils.js';
import './styles.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currProd: undefined,
      currProdStyles: undefined,
      selectedStyle: undefined,
      relatedProducts: [],
      reviews: []
    }

    // Binding all App state modifiers to App
    this.initialize = this.initialize.bind(this);
    this.getOverviewProduct = overviewHandler.getProduct.bind(this);
    this.getProductStyleById = overviewHandler.getProductStyleById.bind(this);
    this.getRelatedProductArray = relatedHandlers.getRelatedProductArray.bind(this);
    this.getReviewsById = reviewHandlers.getReviewsById.bind(this);
  }

  initialize() {
    // Initializes Overview by selecting 1 of 15 products
    // also calls this.getProductStyleById

    this.getOverviewProduct(30)
      // .then(currProd => {
      //   this.getRelatedProductArray(currProd.id);
      // })
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        <h1>Starter app</h1>
        <Overview
          currProd={this.state.currProd}
          currProdStyles={this.state.currProdStyles}
          selectedStyle={this.state.selectedStyle} />
        <RelatedItems
          relatedArr={this.state.relatedProducts}
          currProd = {this.state.currProd}
          initialize={this.getRelatedProductArray} />
        <QuestionsAndAnswers />
        <ReviewsWidget
          currProd={this.state.currProd}
          reviews={this.state.reviews}
          getReviewsById={this.getReviewsById}
          />
      </div>
    )
  }
}

export default App;