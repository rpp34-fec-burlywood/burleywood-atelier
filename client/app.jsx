import React from 'react';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import overviewHandler from './utils/overviewUtils.js';
import './styles.css';
import relatedHandlers  from './utils/relatedItemsUtils.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currProd: undefined,
      currProdStyles: undefined,
      selectedStyle: undefined,
      relatedProducts: []
    }

    // Binding all App state modifiers to App
    this.initialize = this.initialize.bind(this);
    this.getOverviewProduct = overviewHandler.getProduct.bind(this);
    this.getProductStyleById = overviewHandler.getProductStyleById.bind(this);
    this.getRelatedProductArray = relatedHandlers.getRelatedProductArray.bind(this);
  }

  initialize() {
    // Initializes Overview by selecting 1 of 15 products
    this.getOverviewProduct(30)
    // also calls this.getProductStyleById
    this.getRelatedProductArray(64632)
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
        <RelatedItems relatedArr ={this.state.relatedProducts}/>
        <QuestionsAndAnswers/>
      </div>
    )
  }
}

export default App;