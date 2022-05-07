import React from 'react';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import ReviewsWidget from './reviews/reviewsWidget.jsx';
import overviewHandler from './utils/overviewUtils.js';
import relatedHandlers from './utils/relatedItemsUtils.js';
import reviewHandlers from './utils/reviewUtils.js';
import qaHandlers from './utils/questionsAndAnswersUtils.js';
import Stars from './stars.jsx';
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
      reviewMeta: {},
      questionsList: [],
      mainImageIndex: 0,
      outfits: []
    }
    this.home = this.home.bind(this)
    // Binding all App state modifiers to App
    this.initialize = this.initialize.bind(this);

    /**Use this function to set the main product, should trigger entire page render*/
    this.getOverviewProduct = overviewHandler.getProduct.bind(this);
    this.getProductStyleById = overviewHandler.getProductStyleById.bind(this);
    this.addToCart = overviewHandler.addToCart;
    this.carouselClickhandler = overviewHandler.carouselClickhandler.bind(this);
    this.styleClickHandler = overviewHandler.styleClickHandler.bind(this);
    this.arrowXClickHandler = overviewHandler.arrowXClickHandler.bind(this);
    this.getRelatedProductArray = relatedHandlers.getRelatedProductArray.bind(this);

    //Review Methods
    this.handleAddProduct = relatedHandlers.handleAddProduct.bind(this);
    this.getReviewsById = reviewHandlers.getReviewsById.bind(this);
    this.reportReview = reviewHandlers.reportReview.bind(this);
    this.markReviewHelpful = reviewHandlers.markReviewHelpful.bind(this);
    this.getReviewMeta = reviewHandlers.getReviewMeta.bind(this);
    this.postReview = reviewHandlers.postReview.bind(this);

    //Questions
    this.getQuestions = qaHandlers.getQuestionsArray.bind(this);
    this.outfitUpdater = this.outfitUpdater.bind(this)
  }

  initialize(productid = undefined) {
    // Initializes Overview by selecting 1 of 15 products
    // also calls this.getProductStyleById
    this.getOverviewProduct(30, productid)
    this.setState({
      mainImageIndex: 0
    })
  }

  outfitUpdater(value) {
    //takes in an array
    this.setState({
      outfits: value
    })
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

  home() {
    window.location.href = window.location.origin;
  }

  componentDidMount() {
    var id = this.parsePath(window.location?.pathname);
    // console.log(id);
    if (id) {
      // console.log('initialized by id');
      this.initialize(id);
    } else {
      this.initialize();
    }
    let outfits = JSON.parse(sessionStorage.getItem('outfits')) || [];
    this.setState({ outfits: outfits })
  }

  render() {
    // console.log('Review Meta', this.reviewMeta);
    if (this.state.currProd?.id) {
      window.history.replaceState(null, '', `${window.location.origin}/productPage/${this.state.currProd.id}/`)
    }
    return (
      <div id="appContainer">
        <div onClick={this.home} className="home">
          <h1>Starter FASHION</h1>
        </div>
        <Overview
          currProd={this.state.currProd}
          currProdStyles={this.state.currProdStyles}
          defaultStyle={this.state.defaultStyle}
          selectedStyle={this.state.selectedStyle}
          styleClickHandler={this.styleClickHandler}
          addToCart={this.addToCart}
          mainImageIndex={this.state.mainImageIndex}
          carouselClickhandler={this.carouselClickhandler}
          arrowXClickHandler={this.arrowXClickHandler}
          reviews={this.state.reviewMeta?.ratings}
          numReviews={this.state.reviews.length}
          handleAddProduct={this.handleAddProduct} />
        <RelatedItems
          relatedArr={this.state.relatedProducts}
          currProd={this.state.currProd}
          selectedStyle={this.state.selectedStyle}
          initialize={this.getRelatedProductArray}
          selectNewProduct={this.initialize}
          outfitUpdater={this.outfitUpdater}
          outfits={this.state.outfits}
          reviewMeta={this.state.reviewMeta}
        />
        <QuestionsAndAnswers
          currProd={this.state.currProd}
          originalQuestionsList={this.state.questionsList}
          refetch={this.getQuestions}
        />
        <ReviewsWidget
          currProd={this.state.currProd}
          reviews={this.state.reviews}
          getReviewsById={this.getReviewsById}
          markReviewHelpful={this.markReviewHelpful}
          reportReview={this.reportReview}
          getReviewMeta={this.getReviewMeta}
          reviewMeta={this.state.reviewMeta}
          postReview={this.postReview}
        />
      </div>
    )
  }
}

export default App;