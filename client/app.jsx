import React from 'react';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import ReviewsWidget from './reviews/reviewsWidget.jsx';
import overviewHandler from './utils/overviewUtils.js';
import relatedHandlers  from './utils/relatedItemsUtils.js';
import reviewHandlers from './utils/reviewUtils.js';
import qaHandlers from './utils/questionsAndAnswersUtils.js';
import './styles.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currProd: undefined,
      currProdStyles: undefined,
      defaultStyle: undefined,
      selectedStyle: undefined,
      relatedProducts: [],
      reviews: [],
      questionsList: [],
      mainImageIndex: 0
    }

    // Binding all App state modifiers to App
    this.initialize = this.initialize.bind(this);
    this.getOverviewProduct = overviewHandler.getProduct.bind(this);
    this.getProductStyleById = overviewHandler.getProductStyleById.bind(this);
    this.addToCart = overviewHandler.addToCart;
    this.carouselClickhandler = overviewHandler.carouselClickhandler.bind(this);
    this.styleClickHandler = overviewHandler.styleClickHandler.bind(this);
    this.getRelatedProductArray = relatedHandlers.getRelatedProductArray.bind(this);
    this.getReviewsById = reviewHandlers.getReviewsById.bind(this);
    this.reportReview = reviewHandlers.reportReview.bind(this);
    this.markReviewHelpful = reviewHandlers.markReviewHelpful.bind(this);
    this.getQuestions = qaHandlers.getQuestionsArray.bind(this);
  }

  initialize(productid = undefined) {
    // Initializes Overview by selecting 1 of 15 products
    // also calls this.getProductStyleById

    this.getOverviewProduct(30, productid)
      // .then(currProd => {
      //   this.getRelatedProductArray(currProd.id);
      // })
  }

  parsePath(pathname) {
    if (pathname.includes('/productPage/')) {
      var id = pathname.slice(-6, -1);
      var num = Number(id);

      //Will need away to return Page not found!
      if (!isNaN(id) && num > 64619 && num < 65631) {
        return id;
      }
    }
    return false;

  }

  componentDidMount() {
    var id = this.parsePath(window.location?.pathname);
    console.log(id);
    if (id) {
      console.log('initialized by id');
      this.initialize(id);
    } else {
      this.initialize();
    }


  }

  render() {
    if (this.state.currProd?.id) {
      window.history.replaceState(null, '', `${window.location.origin}/productPage/${this.state.currProd.id}/`)
    }
    return (
      <div>
        <h1>Starter app</h1>
        <Overview
          currProd={this.state.currProd}
          currProdStyles={this.state.currProdStyles}
          defaultStyle={this.state.defaultStyle}
          selectedStyle={this.state.selectedStyle}
          styleClickHandler={this.styleClickHandler}
          addToCart={this.addToCart}
          mainImageIndex={this.state.mainImageIndex}
          carouselClickhandler={this.carouselClickhandler} />
        <RelatedItems
          relatedArr={this.state.relatedProducts}
          currProd = {this.state.currProd}
          selectedStyle ={this.state.selectedStyle}
          initialize={this.getRelatedProductArray} />
        <QuestionsAndAnswers
          currProd={ this.state.currProd }
          originalQuestionsList={ this.state.questionsList }
          refetch={ this.getQuestions }
        />
        <ReviewsWidget
          currProd={this.state.currProd}
          reviews={this.state.reviews}
          getReviewsById={this.getReviewsById}
          markReviewHelpful={this.markReviewHelpful}
          reportReview={this.reportReview}
          />
      </div>
    )
  }
}

export default App;