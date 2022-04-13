import React from 'react';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import ReviewsWidget from './reviews/reviewsWidget.jsx';
import overviewHandler from './utils/overviewUtils.js';
import relatedHandlers  from './utils/relatedItemsUtils.js';
import reviewHandlers from './utils/reviewUtils.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currProd: undefined,
      currStyles: undefined,
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
    this.getOverviewProduct(15);
    // also calls this.getProductStyleById
    this.getRelatedProductArray(64632);
    // call 64632 reviews
    this.getReviewsById(64632);
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        <h1>Starter app</h1>
        <Overview />
        <RelatedItems relatedArr ={this.state.relatedProducts}/>
        <QuestionsAndAnswers/>
        <ReviewsWidget reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;